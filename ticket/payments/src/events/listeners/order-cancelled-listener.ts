import { OrderCancelledEvent, Listener, Subjects, OrderStatus } from "@pavtickets/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Order } from "../../models/order";


export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
    queueGroupName = queueGroupName;

    async onMessage(data: OrderCancelledEvent["data"], msg: Message) {
        console.log("Order Cancelled Event Data:", data);

        // Find the order by ID and version
        const order = await Order.findOne({
            _id: data.id,
            version: data.version - 1, // Use version - 1 to find the previous version
        });

        if (!order) {
            throw new Error("Order not found");
        }

        // Update the order status to cancelled
        order.set({ status: OrderStatus.Cancelled});
        await order.save();

        // Acknowledge the message after processing
        msg.ack();
    }
}