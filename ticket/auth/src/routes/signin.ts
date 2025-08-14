import express ,{Request,Response,NextFunction}from "express";
import {body} from "express-validator";
import jwt from "jsonwebtoken";
import { User } from "../models/user";
// import { validateRequest } from "../../../common/src/middlewares/validate-request";
// import { BadRequestError } from "../../../common/src/errors/bad-request-error";
import {validateRequest,BadRequestError} from "@pavtickets/common";
import { Password } from "../services/password";
const router=express.Router();

router.post("/api/users/signin", [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('You must supply a password')
],validateRequest,async (req:Request, res:Response) => {
 

    const { email, password } = req.body;

    const user=await User.findOne({ email });
    if (!user) {
        throw new BadRequestError('Invalid credentials');
    }
    const passwordsMatch = await Password.compare(user.password, password);
    if( !passwordsMatch) {
        throw new BadRequestError('Invalid credentials');
    }
    const userJwt= jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_KEY!);
    req.session={
        jwt: userJwt
    };


    // Here you would typically check the email and password against your database
    // For now, we will just simulate a successful sign-in
    console.log("User signed in with email:", email);

    // Respond with a success message
    res.status(200).send(user);
}
);

export { router as signinRouter };