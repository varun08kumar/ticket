import express ,{Request,Response} from "express";
import {json} from "body-parser";
import cors from "cors";
import 'express-async-errors'; 
import cookieSession from "cookie-session";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signupRouter } from "./routes/signup";
import { signoutRouter } from "./routes/signout";
// import { errorHandler } from "../../common/src/middlewares/error-handler";
import { errorHandler } from "@pavtickets/common";
const app=express();
app.use(cors());
app.set('trust proxy', true); // Trust the first proxy (for Heroku or similar environments)
app.use(json());
app.use(
cookieSession({
    signed: false,
    secure: false // Set to true in production with HTTPS
}));


app.use(currentUserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.use(errorHandler);

export { app };