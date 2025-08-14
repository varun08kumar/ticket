import mongoose from 'mongoose';
import express,{Request, Response} from 'express';
import { requireAuth,validateRequest ,BadRequestError} from '@pavtickets/common';
import { body } from 'express-validator';
import { Ticket } from '../models/ticket';
import { Order, OrderStatus } from '../models/order';
import { natsWrapper } from '../nats-wrapper';
import { OrderCreatedPublisher } from '../events/publishers/order-created-publisher';


const router=express.Router();
const EXPIRATION_WINDOW_SECONDS = 15 * 60; // 15 minutes in seconds
router.post('/api/orders', 
    requireAuth,
    [
        body('ticketId')
        .not()
        .isEmpty()
        .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
        .withMessage('Ticket ID is required'),

    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const { ticketId } = req.body;
        console.log(req);
        

        //find the ticket the user is trying to order in the database
        const ticket=await Ticket.findById(ticketId);
        if (!ticket) {
            throw new BadRequestError('Ticket not found');
        }
        const isReserved = await ticket.isReserved();

        //make sure this ticket is not already reserved 

       
        if (isReserved) {
            throw new BadRequestError('Ticket is already reserved');
        }

        //calculate an expiration date for this order
        const expiration = new Date();
        expiration.setSeconds(expiration.getSeconds() + EXPIRATION_WINDOW_SECONDS); // 15 minutes from now


        //build the order and save it to the database
        const order = Order.build({
            userId: req.currentUser!.id,
            status: OrderStatus.Created,
            expiresAt: expiration,
            ticket
        });


        await order.save();
        
        await new OrderCreatedPublisher(natsWrapper.client).publish({
            id: order.id,
            version: order.version,
            status: order.status,
            userId: order.userId,
            expiresAt: order.expiresAt.toISOString(),
            ticket: {
                id: ticket.id,
                price: ticket.price
            }
        });
        //publish an event saying that an order was created

         res.status(201).send(order);
    });

export {router as newOrderRouter};