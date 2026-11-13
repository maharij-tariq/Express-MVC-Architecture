import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../model/model.js";

export const loginData = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      res.status(401).json({ success: false, message: "Invalid Credential" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "15m",
    });
    res.status(201).json({ success: true, message: "Login Successfully",token:token ,user:{
        id:user._id,
        name: user.name,
        email: user.email
    }
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "SERVER ERROR",
        error: error.message,
      });
  }
};
