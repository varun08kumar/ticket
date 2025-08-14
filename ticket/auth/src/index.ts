import mongoose from "mongoose";
import{app} from "./app";
// app.get("/", (req:Request, res:Response) => {
//     res.send("Hello World!");
// }
// );
const start= async () =>{
    if(!process.env.JWT_KEY){
        throw new Error("JWT_KEY must be defined");
    }
    if(!process.env.MONGO_URI){
        throw new Error("MONGO_URI must be defined");
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        app.listen(3000, () => {    
            console.log("Server is running on port 3000!");
        }
        );
        
    }
 catch (error) {
        console.log("Error connecting to MongoDB:", error);
        
    }
   
};
start();

