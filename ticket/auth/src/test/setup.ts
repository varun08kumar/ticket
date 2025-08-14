import {MongoMemoryServer} from 'mongodb-memory-server';//inmemory server
import mongoose from 'mongoose';
import {app} from '../app';

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

