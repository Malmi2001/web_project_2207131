import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'
import { toast } from 'react-toastify';
// Create a JWT token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// User registration
const userRegister = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "The user already exists" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Encrypt user password
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: encryptedPassword,
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });
        // toast.success("New user successfully added")

    } catch (error) {
        console.error(error.message);
        res.json({ success: false, message: "An error occurred" });
    }
};

const userLogin = async (req, res) => {
const {email,password}=req.body;
try {
    const user = await userModel.findOne({email});
     if(!user){
        return res.json({success:false,message:"User Doesn't exist"})
     }

     const isMatch = await bcrypt.compare(password,user.password);

     if(!isMatch){
        return res.json({success:false,message:"Invalid credentials"});
     }
const token = createToken(user._id);
return res.json({success:true,token});

} catch (error) {
    console.log(error.message);
    return res.json({success:false,message:"An error occurred"});
}

};

export {  userRegister ,userLogin };
