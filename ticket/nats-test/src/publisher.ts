import { log } from 'console';
import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

const prad = nats.connect('ticketing','abc',{
    url: 'http://localhost:4222',
});
prad.on('connect',async()=>{
    console.log('Publisher connected to NATS');
    const publisher=new TicketCreatedPublisher(prad);
    try {
        await publisher.publish({
            id: '123',
            title: 'concert',
            price: 20,
        });
    } catch (error) {
        console.log(error);
        
    }

    // const data= JSON.stringify({
    //     id:'123',
    //     title:'concert',
    //     price: 20,
    // });
    // prad.publish('ticket:created',data,()=>{
    //     console.log('Event published');
        
    // });
}); //connect event is emmited after prad gets connected


