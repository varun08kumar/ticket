import { BadRequestError, requireAuth, UnauthorizedError } from '@pavtickets/common';
import express,{Request, Response} from 'express';
import { Order ,OrderStatus} from '../models/order';
import { OrderCancelledPublisher } from '../events/publishers/order-cancelled-publisher';
import { natsWrapper } from '../nats-wrapper';

const router=express.Router();

router.delete('/api/orders/:orderid', requireAuth,async (req: Request, res: Response) => {
    const order= await Order.findById(req.params.orderid).populate('ticket');
    if (!order) {
        throw new BadRequestError('Order not found');
    }
    if(order.userId !== req.currentUser!.id) {
        throw new UnauthorizedError();
        // throw new BadRequestError('You are not authorized to delete this order');
    }
    order.status= OrderStatus.Cancelled;
    await order.save();
    await new OrderCancelledPublisher(natsWrapper.client).publish({
        id: order.id,
        version: order.version,
        ticket: {
            id: order.ticket.id
        }
    });


    res.status(201).send(order);
});

export {router as deleteOrderRouter};