import mongoose from "mongoose";

export async function dbConnect() {
   try {
       mongoose.connect(process.env.MONGODB_URI!)
       const connection = mongoose.connection
       connection.on("connected", () => {
           console.log("Connected to MongoDB")
       })
       connection.on("error", (error) => {
           console.log("Error connecting to MongoDB")
           console.log(error)
           process.exit();
       })
   } catch (error) {
       console.log("Error connecting to MongoDB")
       console.log(error)
   }
}


