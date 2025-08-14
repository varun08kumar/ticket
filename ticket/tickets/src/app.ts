import express ,{Request,Response} from "express";
import {json} from "body-parser";
import { createTicketRouter } from "./routes/new";
import {updateTicketRouter } from "./routes/update";
import 'express-async-errors'; 
import cookieSession from "cookie-session";

// import { errorHandler } from "../../common/src/middlewares/error-handler";
import { errorHandler ,currentUser,requireAuth} from "@pavtickets/common";
import { showTicketRouter } from "./routes/show";



const app=express();
app.set('trust proxy', true); // Trust the first proxy (for Heroku or similar environments)
app.use(json());
app.use(
cookieSession({
    signed: false,
    secure: false // Set to true in production with HTTPS
}));

app.use(currentUser); // Middleware to check if user is authenticated
// Middleware to require authentication for all routes
app.use(createTicketRouter);
app.use(showTicketRouter)
app.use(updateTicketRouter);
app.use(errorHandler);

export { app };