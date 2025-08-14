import request  from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";
it('has a route handler listening to /api/tickets/:id for get requests', async () => {
    const title="concert";
    const price=20;
    const response=await request(app)
    .post('/api/tickets/')
    .set('Cookie',global.signin())
    .send({
        title,
        price,
    }).expect(200);
    console.log(response.body[0].id);
    
    const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body[0].id}`).set('Cookie',global.signin()).expect(200);
    expect(response.status).not.toEqual(404);
    expect(ticketResponse.body.title).toEqual(title);
    expect(ticketResponse.body.price).toEqual(price);
})

it('has no route handler listening to /api/tickets/:id for get requests', async () => {
     const id=new mongoose.Types.ObjectId().toHexString();
    await request(app).get(`/api/tickets/${id}`).set('Cookie',global.signin()).send({}).expect(400);
    // expect(response.status).not.toEqual(404);
});