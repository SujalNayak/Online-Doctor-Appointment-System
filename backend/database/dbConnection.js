import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


export const dbConnection = () => {
  // console.log("MONGO_URI:", process.env.MONGO_URI);
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in .env file");
  }
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};