import express ,{Request,Response}from "express";
// import {validateRequest} from "../../../common/src/middlewares/validate-request";
import jwt from "jsonwebtoken";
import {body, validationResult} from "express-validator";
// import { RequestValidationError } from "../../../common/src/errors/request-validation-error";
// import { DatabaseConnectionError } from "../../../common/src/errors/database-connection-error";
// import { BadRequestError } from "../../../common/src/errors/bad-request-error";
import { RequestValidationError,DatabaseConnectionError,BadRequestError ,validateRequest} from "@pavtickets/common";
import {User} from "../models/user";

const router=express.Router();

router.post("/api/users/signup",[
    body('email')
    .isEmail()
    .withMessage('Email must be valid'),
    body('password')
    .trim()
    .isLength({min: 4, max: 20})
    .withMessage('Password must be between 4 and 20 characters')
], validateRequest,async (req:Request, res:Response) => {
  
    const {email, password} = req.body;


    console.log("creating a user with email:", email);
    // throw new DatabaseConnectionError();


    const existingUser=await User.findOne({email});

    if(existingUser){
        console.log('email in use');
        // return res.send({});
        throw new BadRequestError('Email in use');
        
    }
    const user=User.build({email,password});
    await user.save();
    // Generate JWT
    const userJwt=jwt.sign({
        id:user.id,
        email:user.email
    },process.env.JWT_KEY!);
    //store it on session object
    console.log(userJwt);
    
    req.session={
        jwt:userJwt
    };

    res.status(201).send(user);
}
);

export { router as signupRouter };