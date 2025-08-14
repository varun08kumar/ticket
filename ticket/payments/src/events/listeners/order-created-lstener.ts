import {Listener,OrderCreatedEvent, Subjects} from '@pavtickets/common';
import {Message} from 'node-nats-streaming';
import { queueGroupName } from './queue-group-name';
import { Order } from '../../models/order';


export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    readonly subject = Subjects.OrderCreated;
    queueGroupName=queueGroupName;
    async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
        console.log('Order Created Event Data:', data);
        const order=Order.build({
            id: data.id,
            version: data.version,
            status: data.status,
            userId: data.userId,
            price: data.ticket.price, // Assuming ticket price is available in the event
        });
        await order.save();
        
        // Here you can add logic to handle the order creation event, such as saving it to a database or processing it further.
        
        // Acknowledge the message after processing
        msg.ack();
    }
}