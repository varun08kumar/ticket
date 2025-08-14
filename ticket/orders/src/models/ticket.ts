import mongoose from "mongoose";
import { Order ,OrderStatus} from "./order";
import {updateIfCurrentPlugin} from 'mongoose-update-if-current';
// import { OrderStatus } from "@pavtickets/common";


interface TicketAttrs {
    id: string;
    title: string;
    price: number;
    // version: number;
}
interface TicketDoc extends mongoose.Document {
    
    title: string;
    price: number;   
    version: number;  
    isReserved(): Promise<boolean>;   
}
interface TicketModel extends mongoose.Model<TicketDoc> {
    build(attrs: TicketAttrs): TicketDoc;
    findByEvent(event:{id:string,version:number}): Promise<TicketDoc | null>;

}

const Ticketschema=new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
}, {
    toJSON: {
        transform(doc: any, ret: any) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
});
Ticketschema.set('versionKey', 'version');
Ticketschema.plugin(updateIfCurrentPlugin);// this plugin adds a version field to the schema and handles versioning automatically

Ticketschema.statics.build = (attrs: TicketAttrs) => {
    return new Ticket({
        _id: attrs.id, // setting the id as _id
        title: attrs.title,
        price: attrs.price,
        // version: attrs.version
    });
};
Ticketschema.statics.findByEvent = (event: { id: string; version: number }) => {
    return Ticket.findOne({
        _id: event.id,
        version: event.version - 1 // find the document with the previous version
    });
};//it operates on entire collection, not on a single document

Ticketschema.methods.isReserved = async function () {
    //context of this is equal to object which called this method
     const existingOrder=await Order.findOne({
                ticket: this,
                status: {
                    $in: [
                        OrderStatus.Created,
                        OrderStatus.AwaitingPayment,
                        OrderStatus.Complete
    
                    ]
                }
            });
    return !!existingOrder; // returns true if existingOrder is found, false otherwise

}; //it operates on a single document, not on the entire collection

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', Ticketschema);// first Ticket is collection name 
export { Ticket, TicketAttrs, TicketDoc, TicketModel };
