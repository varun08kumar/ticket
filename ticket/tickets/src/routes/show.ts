import { requireAuth ,validateRequest,BadRequestError} from '@pavtickets/common';
import { body } from 'express-validator';
import express ,{Request, Response} from 'express';
import { Ticket } from '../models/ticket';
const router=  express.Router();

router.get("/api/tickets/:id",async (req:Request, res:Response) => {
    const ticketId = req.params.id;
    if (!ticketId) {
        throw new BadRequestError('Ticket ID is required');
    }
    // Here you would typically fetch the ticket from your database
    const ticket=await Ticket.findById(ticketId);
    
    if (!ticket) {
        throw new BadRequestError('Ticket not found');
    }
    return res.status(200).send(ticket);
})

export {router as showTicketRouter};