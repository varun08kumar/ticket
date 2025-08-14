
import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";
import { OrderCancelledListener} from "./events/listeners/order-cancelled-listener";
import { OrderCreatedListener } from "./events/listeners/order-created-listener";

console.log("🚀 Starting Tickets service...");

const start = async () => {
  // Log env checks
  console.log("Checking environment variables...");

  if (!process.env.JWT_KEY) {
    console.error("❌ JWT_KEY not defined");
    process.exit(1); // Exit gracefully
  }

  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI not defined");
    process.exit(1); // Exit gracefully
  }
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

  console.log("✅ Env vars look good. Connecting to MongoDB...");

  try {
    await natsWrapper.connect(process.env.NATS_CLUSTER_ID,process.env.NATS_CLIENT_ID,process.env.NATS_URI);

    console.log("✅ Connected to NATS");
    
    natsWrapper.client.on('close',()=>{
      console.log('NATS connection closed');
      process.exit();
  });

  process.on('SIGINT',()=>{natsWrapper.client.close()}); //interrupt signal
  process.on('SIGTERM',()=>{natsWrapper.client.close()}); //terminate signal
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");
    new OrderCancelledListener(natsWrapper.client).listen();
    new OrderCreatedListener(natsWrapper.client).listen();
    
    app.listen(3000, () => {
      console.log("✅ Tickets service running on port 3000!");
    });

  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

start();
