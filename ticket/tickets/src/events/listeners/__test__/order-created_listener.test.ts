import { OrderCreatedListener } from "../order-created-listener";
import { natsWrapper } from "../../../nats-wrapper";
import { Ticket } from "../../../models/ticket";
import { OrderCreatedEvent, OrderStatus, Subjects } from "@pavtickets/common";
import mongoose from "mongoose";
import { Message } from "node-nats-streaming";

const setup=async ()=>{
    const listener = new OrderCreatedListener(natsWrapper.client);
    //create and save ticket
    const ticket=Ticket.build({
        // id: 'ticket123',
        title: 'concert',
        price: 20,
        userId:'asdf'

    });
    await ticket.save();
    console.log(ticket);
    
    //create a fake data object
    const data :OrderCreatedEvent['data']= {
        id: new mongoose.Types.ObjectId().toHexString(),
        version: 0,
        userId: 'user123',
        status: OrderStatus.Created,
        expiresAt: new Date().toISOString(),
        ticket: {
            id:ticket.id,
            price: ticket.price
        }
    };
    //@ts-ignore
    const msg:Message={
        ack: jest.fn(),
    }
    return {listener,msg,data,ticket};
};

it('sets the userId of the ticket',async ()=>{
    const {listener,msg,data,ticket}=await setup();

    await listener.onMessage(data,msg);
    const updatedTicket = await Ticket.findById(ticket.id);
    expect(updatedTicket!.orderId).toEqual(data.id);
});

it('acks the message',async()=>{
    const {listener,ticket,data,msg}=await setup();
    await listener.onMessage(data,msg);
    expect(msg.ack).toHaveBeenCalled();
});

it('publishes a ticket updated event',async ()=>{
    const {listener,msg,ticket,data}=await setup();

    await listener.onMessage(data,msg);
    expect(natsWrapper.client.publish).toHaveBeenCalled();
    //@ts-ignore
    console.log(natsWrapper.client.publish.mock.calls);
    
});