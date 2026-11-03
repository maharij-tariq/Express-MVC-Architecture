import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import student from "../model/data.js";

export const homeRoute = (req, res) => {
  res.send("home route");
};

export const createData = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exist = await student.findOne({ email });
    if (exist) {
      return res.status(409).json({ message: "Email already exist" });
    }
    const hashing = await bcrypt.hash(password, 10);
    await student.create({
      name,
      email,
      password: hashing,
    });
    console.log(student)
    res.status(201).json({ message: "usercreate successfullyy" , student : student});
  } catch (error) {
    return res.status(500).josn({ message: error.message });
  }
};

export const findData = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await student.findOne({ email });
    if (!user) {
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      return res.status(401).json({ message: "invalid credential" });
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "5m",
    });
    res.status(200).json({ message: "login successfully", token: token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getProfile = async (req, res) => {
  try {
    const userData = await student.findById(req.userID).select("-password");
    if (!userData) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({
      message: "fetched data successfully",
      success: true,
      user: userData,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
