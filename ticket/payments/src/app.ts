import express ,{Request,Response} from "express";
import {json} from "body-parser";
import 'express-async-errors'; 
import cookieSession from "cookie-session";
import { errorHandler ,currentUser,requireAuth} from "@pavtickets/common";
import { newPaymentRouter } from "./routes/new";




const app=express();
app.set('trust proxy', true); // Trust the first proxy (for Heroku or similar environments)
app.use(json());
app.use(
cookieSession({
    signed: false,
    secure: false // Set to true in production with HTTPS
}));
app.use(currentUser); // Middleware to check if user is authenticated
app.use(newPaymentRouter)



export { app };