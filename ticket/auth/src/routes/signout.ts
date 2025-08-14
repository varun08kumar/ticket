import express from "express";

const router=express.Router();

router.post("/api/users/signout", (req, res) => {
    req.session = undefined; // Clear the session to sign out the user
    res.status(200).send({ message: "User signed out successfully" });
}
);

export { router as signoutRouter };