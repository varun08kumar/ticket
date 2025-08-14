import { Subjects,Listener,PaymentCreatedEvent ,OrderStatus} from "@pavtickets/common";
import { Message } from 'node-nats-streaming';
import { queueGroupName } from './queue-group-name';
import { Order } from '../../models/order'; // Assuming you have an Order model to update
export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
    queueGroupName = queueGroupName;

    async onMessage(data: PaymentCreatedEvent['data'], msg: Message) {
        console.log('Payment Created Event Received:', data);
        const { id, orderId, stripeId } = data;
        const order = await Order.findById(orderId);
        if (!order) {
            throw new Error('Order not found');
        }
        order.status = OrderStatus.Complete; // Update order status to complete
        await order.save();
        // Here you can handle the payment creation logic, such as updating order status or notifying other services

        // Acknowledge the message
        msg.ack();
    }
}