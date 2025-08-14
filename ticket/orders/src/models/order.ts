import mongoose from "mongoose";
import { OrderStatus } from "@pavtickets/common";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";
import { TicketDoc } from "./ticket";
export {OrderStatus};

interface OrderAttrs {
    userId: string;
    status: OrderStatus;
    expiresAt: Date;
    ticket: TicketDoc;
}

interface OrderDoc extends mongoose.Document {
    userId: string;
    status: OrderStatus;
    expiresAt: Date;
    ticket: TicketDoc;
    version: number;
}

interface OrderModel extends mongoose.Model<OrderDoc> {
    build(attrs: OrderAttrs): OrderDoc;
}

const orderSchema= new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: Object.values(OrderStatus),
        default: OrderStatus.Created
    },
    expiresAt: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    ticket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket',
        required: true
    }
},{
    toJSON: {
        transform(doc: any, ret: any) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
});
orderSchema.set('versionKey', 'version');
orderSchema.plugin(updateIfCurrentPlugin); // this plugin adds a version field to the schema and handles versioning automatically
orderSchema.statics.build = (attrs: OrderAttrs) => {
    return new Order(attrs);
};
const Order = mongoose.model<OrderDoc, OrderModel>('Order', orderSchema);
export { Order, OrderAttrs, OrderDoc, OrderModel };