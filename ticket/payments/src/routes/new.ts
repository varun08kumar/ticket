import express,{Request, Response} from 'express';
import { body } from 'express-validator';
import { Order } from '../models/order';
import { requireAuth,validateRequest,BadRequestError, OrderStatus } from '@pavtickets/common';
import { stripe } from '../stripe';
import { Payment } from '../models/payment';
import { PaymentCreatedPublisher } from '../events/publishers/payment-created-publisher';
import { natsWrapper } from '../nats-wrapper';
const router=express.Router();

router.post('/api/payments',requireAuth,
[
    body('token')
        .not()
        .isEmpty()
        .withMessage('Token is required'),
    body('orderId')
        .not()
        .isEmpty()
        .withMessage('Order ID is required'),
],validateRequest,async (req: Request, res: Response) => {
    const {token,orderId}= req.body;
    const order= await Order.findById(orderId);
    console.log(req);
    

    if(!order){
        throw new BadRequestError(`Order not found ${orderId} `);
    }
    if(order.userId !== req.currentUser!.id){
        throw new BadRequestError(`Not authorized to make payment for this order ${order}`);
    }
    if(order!.status===OrderStatus.Cancelled){
        
        throw new BadRequestError(`Cannot make payment for a cancelled order ${orderId}`);
    }
    const charge=await stripe.charges.create({
        currency: 'usd',
        amount: order.price * 100, // Convert to cents
        source: token,
        // description: `Payment for order ${orderId}`
    });

    const payment = Payment.build({
        orderId: order.id,
        stripeId: charge.id
    });
    await payment.save();

    new PaymentCreatedPublisher(natsWrapper.client).publish({
        id: payment.id,
        orderId: payment.orderId,
        stripeId: payment.stripeId,
    });
    
    res.status(201).send({success:true});
});

export {router as newPaymentRouter};