import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import mongoose from 'mongoose';

it('fetches the order', async () => {
    //create a ticket
    const ticket = Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        price: 20
    });
    await ticket.save();

    const user=global.signin();

    const {body:order}=await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({
        ticketId: ticket.id
    })
    .expect(201);

    const {body:fetchedOrder}=await request(app)
    .get(`/api/orders/${order.id}`)
    .set('Cookie', user)
    .send()
    .expect(200);
    console.log(fetchedOrder);
    

    expect(fetchedOrder.id).toEqual(order.id);
    expect(fetchedOrder.ticket.id).toEqual(ticket.id);
    expect(fetchedOrder.ticket.title).toEqual(ticket.title);
    expect(fetchedOrder.ticket.price).toEqual(ticket.price);
    // expect(fetchedOrder.userId).toEqual(user.id);
});