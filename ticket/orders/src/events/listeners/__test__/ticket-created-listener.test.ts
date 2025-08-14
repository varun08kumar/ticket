import { TicketCreatedListener } from "../ticket-created-listener";
import { natsWrapper } from "../../../nats-wrapper";
import { TicketCreatedEvent } from "@pavtickets/common";
import mongoose, { mongo } from "mongoose";
import { Message } from "node-nats-streaming";
import { Ticket } from "../../../models/ticket";
const setup=async ()=>{
    // create an instanceof TicketCreatedListener;

    const listener = new TicketCreatedListener(natsWrapper.client);


    //create fake data
    const data:TicketCreatedEvent['data'] = {
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        price: 20,
        userId: new mongoose.Types.ObjectId().toHexString(),
        version: 0
    };

    //create a message object
    // @ts-ignore
    const msg:Message={
        ack: jest.fn() // mock the acknowledge function
    }
    return {listener,data,msg};
};

it('creates and saves a ticket',async()=>{
    const {listener,data,msg} = await setup();
    await listener.onMessage(data,msg);

    const ticket = await Ticket.findById(data.id);

    expect(ticket).toBeDefined();
    expect(ticket!.title).toEqual(data.title);
    expect(ticket!.price).toEqual(data.price);
    

    //call onMessage function with data and message object

    //write assertions to make sure a ticket was created

});

it('ack the message',async()=>{ 
   
    //call onMessage function with data and message object
    const {data,msg,listener} = await setup();

    //write assertions to make sure a acknowledge function was called
    await listener.onMessage(data,msg);

    expect(msg.ack).toHaveBeenCalled();

});
