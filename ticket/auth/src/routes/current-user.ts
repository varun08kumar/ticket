import express from "express";
import jwt from "jsonwebtoken";
// import { currentUser } from "../../../common/src/middlewares/current-user";
// import { requireAuth } from "../../../common/src/middlewares/require-auth";
import { currentUser,requireAuth } from "@pavtickets/common";

const router=express.Router();

router.get("/api/users/currentuser", currentUser,(req, res) => {
  
    res.send({currentUser: req.currentUser || null});
    
    
    // res.send("Current User");
}
);

export { router as currentUserRouter };