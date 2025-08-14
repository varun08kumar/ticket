import request from "supertest";
import mongoose from "mongoose";
import {app} from '../../app';
import { Order } from "../../models/order";
import { OrderStatus } from "@pavtickets/common";


// it('return 404 when purchasing an order that does not exist',async()=>{
//     const res=await request(app)
//     .post('/api/payments')
//     .set('Cookie',global.signin())
//     .send({
//         token:new mongoose.Types.ObjectId().toHexString(),
//         orderId:new mongoose.Types.ObjectId().toHexString(),
        
//     });
//     console.log(res.error);
    
// });

it('returns a 404 when purchasing an order that doesnt belong to the user',async()=>{
        const order=Order.build({
            id:new mongoose.Types.ObjectId().toHexString(),
            userId:new mongoose.Types.ObjectId().toHexString(),
            version:0,
            price:200,
            status:OrderStatus.Created
        });
        await order.save();

        const res=await request(app)
        .post('/api/payments')
        .set('Cookie',global.signin())
        .send({
            token:new mongoose.Types.ObjectId().toHexString(),
            orderId:order.id,
            
        })

        console.log(res.error);
        
        


});

// it('return a 400 when purchasing a cancelled order',async ()=>{
//         const userId= new mongoose.Types.ObjectId().toHexString();
//         const order=Order.build({
//             id:new mongoose.Types.ObjectId().toHexString(),
//             userId,
//             version:0,
//             price:20,
//             status:OrderStatus.Created,
//         });
//         await order.save();
//         console.log(order);
        
//         const res=await request(app)
//         .post('/api/payments')
//         .set('Cookie',userId)
//         .send({
//             token:new mongoose.Types.ObjectId().toHexString(),
//             orderId:order.id,
//         })
//         // .expect(400);
//         console.log(res);
        
// })