import mongoose from "mongoose";


// Define a Mongoose schema for food items
const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    Image:{type:String,required:true},
    category:{type:String,required:true},
});
// Create a Mongoose model for food using the schema

const foodModel = mongoose.models.food ||  mongoose.model("food",foodSchema);

export default foodModel;