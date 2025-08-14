import { natsWrapper } from "./nats-wrapper";
import { OrderCreatedListener } from "./events/listeners/order-created-listener";

console.log("🚀 Starting expiration service...");

const start = async () => {
  // Log env checks
  console.log("Checking environment variables...");


  if (!process.env.NATS_CLIENT_ID) {
    console.error("nats client id not defined");
    process.exit(1); // Exit gracefully
  }
  if (!process.env.NATS_URI) {
    console.error("nats url not defined");
    process.exit(1); // Exit gracefully
  }
  if (!process.env.NATS_CLUSTER_ID) {
    console.error("nats cluster id not defined");
    process.exit(1); // Exit gracefully
  }

  // console.log("✅ Env vars look good. Connecting to MongoDB...");

  try {
    await natsWrapper.connect(process.env.NATS_CLUSTER_ID,process.env!.NATS_CLIENT_ID,process.env!.NATS_URI);

    console.log("✅ Connected to NATS");
   
    
    natsWrapper.client.on('close',()=>{
      console.log('NATS connection closed');
      process.exit();
  });

  process.on('SIGINT',()=>{natsWrapper.client.close()}); //interrupt signal
  process.on('SIGTERM',()=>{natsWrapper.client.close()}); //terminate signal
    
  new OrderCreatedListener(natsWrapper.client).listen();
    

  } catch (err) {
   
    process.exit(1);
  }
};

start();
