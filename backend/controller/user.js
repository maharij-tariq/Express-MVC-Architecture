import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../model/model.js";

export const userData = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if(!name || !email || !password){
       return res.status(400).json({
            success:false,
            message:'All filed are required'
        })
    }
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.status(409).json({ success:false, message: "Email already exist" });
    }
    const hashing = await bcrypt.hash(password,10)
    const data = await userModel.create({
      name,
      email,
      password : hashing 
    });
    res.status(201).json({
        success:true,
        message:'Signup successfully',
        user: data
    })
  } catch (error) {
   return res.status(500).json({success:false,
        message:'server error',
        error: error.message
    })
  }
};
