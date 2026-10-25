import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/studentDB");
    console.log('mongodb connected successfully')
  } catch (error) {
    console.log("mongodb is not connected",error.message);
  }
};
