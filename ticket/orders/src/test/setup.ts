import {MongoMemoryServer} from 'mongodb-memory-server';//inmemory server
import mongoose from 'mongoose';
import {app} from '../app';
import jwt from 'jsonwebtoken';
declare global {
    // namespace NodeJS {
    //     interface Global{
    //         signin:()=>string[]; // Declare a global signin function
    //     }
    // }
    var signin:()=>string[]; // Declare a global signin function
}
jest.mock('../nats-wrapper'); // Mock the NATS wrapper

let mongoServer:any;
beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    
    await mongoose.connect(mongoUri,{});
    
    // process.env.JWT_KEY = 'testsecret'; // Set JWT_KEY for tests
});

beforeEach(async () => {
    process.env.JWT_KEY = 'testsecret'; // Set JWT_KEY for tests
    if(mongoose.connection.db){
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
        await collection.deleteMany({});
    }
}
});
afterAll(async () => {  
    if(mongoServer) {
    await mongoServer.stop();
    }
    await mongoose.connection.close();
});


global.signin =  () => {

    const payload={
        id:new mongoose.Types.ObjectId().toHexString(),
        email:'test@test.com'
    };
    const token=jwt.sign(payload, process.env.JWT_KEY!);
    // Use non-null assertion since we set JWT_KEY in beforeAll
    const session={jwt:token};
    const sessionJSON=JSON.stringify(session);

    const base64 = Buffer.from(sessionJSON).toString('base64');
    return [`session=${base64}`];
}
