import { BadRequestError, requireAuth ,UnauthorizedError} from '@pavtickets/common';
import express,{Request, Response} from 'express';
import { Order } from '../models/order';

const router=express.Router();

router.get('/api/orders/:orderId', requireAuth,async (req: Request, res: Response) => {
    const order=await Order.findById(req.params.orderId).populate('ticket');
    if (!order) {
        throw new BadRequestError('Order not found');
    }
    if(order.userId !== req.currentUser!.id) {
        throw new UnauthorizedError();
        // throw new BadRequestError('You are not authorized to view this order');
    }


    res.status(200).send(order);
});

export {router as showOrderRouter};