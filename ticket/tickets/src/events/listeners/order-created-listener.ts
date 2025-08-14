import { Listener, OrderCreatedEvent, OrderStatus, Subjects, TicketCreatedEvent } from "@pavtickets/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../models/ticket";
import { TicketUpdatedPublisher } from "../publishers/ticket-updated-publisher";

export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    readonly subject = Subjects.OrderCreated;
    queueGroupName= queueGroupName;
    async onMessage(data: OrderCreatedEvent['data'], msg: Message) {

        //find the ticket that the order is reserving
        const ticket = await Ticket.findById(data.ticket.id);
        //if no ticket,throw error
        if(!ticket) {
            throw new Error('Ticket not found');
        }
        //mark the ticket as being reserved by setting its orderId property
        ticket.set({ orderId: data.id });
        //save the ticket
        await ticket.save();
        await new TicketUpdatedPublisher(this.client).publish({
            id:ticket.id,
            title:ticket.title,
            version:ticket.version,
            userId:ticket.userId,
            orderId:ticket.orderId,
            price:ticket.price
        });
        console.log('Ticket updated successfully');
        //acknowledge the message
        msg.ack();

    }
}