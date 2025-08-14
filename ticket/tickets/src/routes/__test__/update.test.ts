// import request from 'supertest';
// import { app } from '../../app';
// import mongoose from 'mongoose';
// it('returns a 404 if provided id does not exist', async () => {
//     const id=new mongoose.Types.ObjectId().toHexString();
//     await request(app)
//         .put(`/api/tickets/${id}`)
//         .set('Cookie', global.signin())
//         .send({
//             title: 'concert',
//             price: 20,
//         })
//         .expect(400);
// });