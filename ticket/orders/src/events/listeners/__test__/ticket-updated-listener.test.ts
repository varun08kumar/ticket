import { TicketUpdatedListener } from "../ticket-updated-listener";
import { natsWrapper } from "../../../nats-wrapper";
import { Ticket } from "../../../models/ticket";
import { TicketUpdatedEvent } from "@pavtickets/common";
import mongoose from "mongoose";
import { Message } from "node-nats-streaming";

const setup=async ()=>{
    //create a listener instance
    const listener = new TicketUpdatedListener(natsWrapper.client);
    //create and save a ticket
    const ticket = Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        price: 20,
        // userId: new mongoose.Types.ObjectId().toHexString(),
    });
    await ticket.save();

    //create a fake data object
    const data: TicketUpdatedEvent['data'] = {
        id: ticket.id,
        title: 'updated concert',
        price: 30,
        userId: new mongoose.Types.ObjectId().toHexString(),
        version: ticket.version + 1
    }

    //create a fake msg object
    // @ts-ignore
    const msg:Message={
        ack: jest.fn() // mock the acknowledge function
    }
    //return all of this stuff
    return { listener, data, msg, ticket };

};

it('finds, updates and saves a ticket',async()=>{
    const {listener, data, msg, ticket} = await setup();
    await listener.onMessage(data, msg);
    const updatedTicket = await Ticket.findById(ticket.id);
    // expect(updatedTicket).toBeDefined();
    console.log(updatedTicket);
    
    expect(updatedTicket!.title).toEqual(data.title);
    expect(updatedTicket!.price).toEqual(data.price);
    expect(updatedTicket!.version).toEqual(data.version);
   
});

it('ack the message',async ()=>{
    const {listener, data, msg,ticket} =await  setup();
    console.log(ticket);
    
    await listener.onMessage(data, msg);
    expect(msg.ack).toHaveBeenCalled();
});

it('does not call ack if the event has a skipped version number',async ()=>{
    const {listener, data, msg,ticket} =await  setup();
    data.version = 10; // setting a version that is higher than the current version
    try {
        await listener.onMessage(data, msg);
    } catch (err) {
        // expect an error to be thrown
        // throw new Error('Ticket not found');
    }
    expect(msg.ack).not.toHaveBeenCalled();
});