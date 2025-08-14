import request from 'supertest';

import { app } from '../../app';
import { Order ,OrderStatus } from '../../models/order';
import mongoose from 'mongoose';
import { Ticket } from '../../models/ticket';
import { natsWrapper } from '../../nats-wrapper';

it('deletes an order', async () => {
    const ticket=Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        price: 20
    });

    await ticket.save()
    const user = global.signin();

    const {body:order} =await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({
        ticketId: ticket.id
    })
    .expect(201);
    await request(app)
    .delete(`/api/orders/${order.id}`)
    .set('Cookie', user)
    .send()
    .expect(201);
    
    const deletedOrder = await Order.findById(order.id);
    expect(deletedOrder!.status).toEqual(OrderStatus.Cancelled);


});
it('emit an order cancelled event', async () => {
    const ticket=Ticket.build({
        id: new mongoose.Types.ObjectId().toHexString(),
        title: 'concert',
        price: 20
    });

    await ticket.save()
    const user = global.signin();

    const {body:order} =await request(app)
    .post('/api/orders')
    .set('Cookie', user)
    .send({
        ticketId: ticket.id
    })
    .expect(201);
    await request(app)
    .delete(`/api/orders/${order.id}`)
    .set('Cookie', user)
    .send()
    .expect(201);
    
    const deletedOrder = await Order.findById(order.id);
    expect(deletedOrder!.status).toEqual(OrderStatus.Cancelled);
    expect(natsWrapper.client.publish).toHaveBeenCalled();
 
});