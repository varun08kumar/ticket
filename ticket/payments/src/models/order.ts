import { OrderStatus } from '@pavtickets/common';
import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';
interface OrderAttrs {
    id:string,
    version:number,
    status:OrderStatus,
    userId:string,
    price:number,
}

interface OrderDoc extends mongoose.Document {
    version:number,
    status:OrderStatus,
    userId:string,
    price:number,
    
}

interface OrderMode extends mongoose.Model<OrderDoc> {
    build(attrs: OrderAttrs): OrderDoc;

}

const orderSchema=new mongoose.Schema({
    version:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        required:true,
        // enum:Object.values(OrderStatus),
    },
    userId:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
},
{
    toJSON:{
        transform(doc:any,ret:any) {
            ret.id = ret._id;
            delete ret._id;
            // delete ret.__v;
        }
    }
});
orderSchema.set('versionKey', 'version');
orderSchema.plugin(updateIfCurrentPlugin); 

orderSchema.statics.build = (attrs: OrderAttrs) => {
    return new Order({
        _id: attrs.id,
        version: attrs.version,
        status: attrs.status,
        userId: attrs.userId,
        price: attrs.price,
    });
};
// this plugin adds a version field to the schema and handles versioning automatically

const Order=mongoose.model<OrderDoc, OrderMode>('Order', orderSchema);

export {Order};