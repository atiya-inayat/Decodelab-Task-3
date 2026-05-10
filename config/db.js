import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
export const connectToDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Mongodb connected successfully...");
  } catch (error) {
    console.log("Error While connecting to database...");
  }
};
