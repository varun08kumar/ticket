import {Message} from 'node-nats-streaming';
import { Listener,TicketCreatedEvent ,Subjects} from '@pavtickets/common';
import { Ticket } from '../../models/ticket';
import {queueGroupName} from './queue-group-name';


export class TicketCreatedListener extends Listener<TicketCreatedEvent>{
    readonly subject = Subjects.TicketCreated;
    queueGroupName = queueGroupName; // This should match the queue group name used in the publisher
    //the purpose of the queue group name is to ensure that only one instance of the listener processes the event at a time
    async onMessage(data: TicketCreatedEvent['data'], msg: Message){
        const {id,title,price}= data;
        const ticket=Ticket.build({
            id,
            title,
            price,
        });
        await ticket.save();
        console.log('jksafkjfask');




        msg.ack(); // Acknowledge the message
    }
}
