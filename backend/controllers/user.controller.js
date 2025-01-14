import e from "express";
import User from "../models/user.model.js";
import bcrypt from 'bcrypt'



export const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const existing = await User.findOne({ email: email });
      if(existing){
        return res.status(400).json({ success: false, message: "User already exists", });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser =  new User({username: username, email:email, password:hashedPassword});
      await newUser.save();
      res.status(201).json({ success: true, data: newUser, message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message  });
    }
  }

  export const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if(!user){
        return res.status(400).json({ success: false, message: "User not found", });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch){
        return res.status(400).json({ success: false, message: "Invalid credentials", });
      }
      res.json({ success: true, message: "User authenticated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error: error.message  });
    }
  }