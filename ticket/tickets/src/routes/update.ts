import express,{Request,Response,NextFunction} from 'express';
import { body } from 'express-validator';

import {
    validateRequest,
    requireAuth,
    BadRequestError
} from '@pavtickets/common';
import { Ticket } from '../models/ticket';
import { natsWrapper } from '../nats-wrapper';
import { TicketUpdatedPublisher } from '../events/publishers/ticket-updated-publisher';
const router = express.Router();
router.put(
    '/api/tickets/:id',
    requireAuth,
    [
        body('title')
            .not()
            .isEmpty()
            .withMessage('Title is required'),
        body('price')
            .isFloat({ gt: 0 })
            .withMessage('Price must be greater than zero')
    ],
    validateRequest,
    async (req: Request, res: Response, next: NextFunction) => {    
        const { title, price } = req.body;
        const ticketId = req.params.id;
        console.log(ticketId);
        // const ticketId=null;

        // Validate ticket ID
        if (!ticketId) {
            throw new BadRequestError('Ticket ID is required');
        }

        // Find the ticket by ID
        const ticket = await Ticket.findById(ticketId);
        console.log(ticket);
        
        if (!ticket) {
            // console.log(ticket);
            
            throw new BadRequestError('Ticket not found');
        }

        // Check if the user is authorized to update the ticket
        console.log(ticket.userId, req.currentUser!.id);
        
        if (ticket.userId !== req.currentUser!.id) {
            throw new BadRequestError('Not authorized to update this ticket');
        }
        if(ticket.orderId){
            throw new BadRequestError('ticket is reserved');
        }
        // Update the ticket details
        ticket.set({ title, price });
        
        await ticket.save();
        new TicketUpdatedPublisher(natsWrapper.client).publish({
            id:ticket.id,
            price: ticket.price,
            title: ticket.title,
            userId: ticket.userId,
            version: ticket.version
        });

        res.status(200).send(ticket);
    }
);
export { router as updateTicketRouter };