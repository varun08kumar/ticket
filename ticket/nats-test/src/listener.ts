import nats ,{Message,Stan} from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { TicketCreatedListener } from './events/ticket-created-listener';
const prad=nats.connect('ticketing',randomBytes(4).toString('hex'),{
    url: 'http://localhost:4222',
});

prad.on('connect',()=>{


    prad.on('close',()=>{
        console.log('NATS connection closed');
        process.exit();
    })
    console.log("this is listener");
    const listener=new TicketCreatedListener(prad);
    listener.listen();
});


process.on('SIGINT',()=>{prad.close()}); //interrupt signal
process.on('SIGTERM',()=>{prad.close()}); //terminate signal


