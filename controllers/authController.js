import userModel from "../models/userModel.js";
import { hashpassword } from "../helper/authHelper.js";

export const registerController = async (req, res) => {
  try {
    const {name, email, password, phone, address} = req.body;
    if (!name) {
      return res.send({ error: "Name is Required !" });
    }
    if (!email) {
      return res.send({ error: "Email is Required !" });
    }
    if (!password) {
      return res.send({ error: "password is Required !" });
    }
    if (!phone) {
      return res.send({ error: "phone number is Required !" });
    }
    if (!address) {
      return res.send({ error: "address is Required !" });
    }

    // check user
    const existingUser = await userModel.findOne({ email });
    // existing user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already register please login",
      });
    }
    // regisrer user
    const hashedPassword = await hashpassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "user Register Successfully",
      user,
      
    });
  } catch (error) {
    console.log("error is : ",error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration.",
      error,
    });
  }
};
