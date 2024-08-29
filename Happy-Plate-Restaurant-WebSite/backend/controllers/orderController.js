import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import stripe from "stripe";

//place user order
//add payment gateway

const placeOrder = async (req,res) => {
    
}

// user orders
const userOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error occurred"})
    }
}



export {placeOrder,userOrders};