import request from "supertest";
import { app } from "../../app";

// jest.mock("../../nats-wrapper");

// it("has a route handlr listening to /api/tickets for post requests", async () => {
//   const response = await request(app).post("/api/tickets").send({});

//   expect(response.status).not.toEqual(404);
// }
// );



it("can be accessed if the user is signed in only ", async () => {
   await request(app).post("/api/tickets").send({}).expect(400);
    
    // const response = await request(app).post("/api/tickets").send({});
  
    // expect(response.status).not.toEqual(404);
  }
  );


it("returns other than 402 if user is signed in  ", async () => {
    // await request(app).post("/api/tickets").send({}).expect(400);
     
     const response = await request(app).post("/api/tickets").set('Cookie',global.signin()).send({});
   
     expect(response.status).not.toEqual(404);
   }
   );

it('returns error if invalid title is provided', async () => {
    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
        title: '',
        price: 10,
        })
        .expect(400);
    
    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
        price: 10,
        })
        .expect(400);
});
it('returns error if invalid price is provided', async () => {
    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
        title: 'valid title',
        price: -10,
        })
        .expect(400);
    
    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
        title: 'valid title',
        })
        .expect(400);
});

it('creates a ticket with valid inputs', async () => {
    // let tickets = await request(app)
    //     .get('/api/tickets')
    //     .set('Cookie', global.signin())
    //     .send();
    
    // expect(tickets.body.length).toEqual(0);

    const title = 'valid title';
    const price = 20;

   let tickets= await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
        title,
        price,
        })
        .expect(200);
        console.log(Object.keys(tickets.body).length);
        console.log(typeof tickets.body);
    console.log(tickets.body);
        

    // const tickets = await request(app)
    //     .get('/api/tickets')
    //     .set('Cookie', global.signin())
    //     .send();

    expect(tickets.body.length).toEqual(1);
    expect(tickets.body[0].title).toEqual(title);
    expect(tickets.body[0].price).toEqual(price);
});
