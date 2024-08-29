import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food item
const addFoodItem = async (req, res) => {
    try {
        // Validate input data
        const { name, description, price, category } = req.body;
        if (!name || !description || !price || !category) {
            return res.status(400).json({ success: false, message: "Invalid input data" });
        }

        // Handle file upload 
        const imageFileName = req.file?.filename;
        if (!imageFileName) {
            return res.status(400).json({ success: false, message: "Image upload failed" });
        }

        // Create a new food item
        const food = new foodModel({
            name,
            description,
            price,
            category,
            Image: imageFileName,
        });

        // Save the food item to the database
        await food.save();
        res.json({ success: true, message: "The Food Successfully Added" });
    } catch (error) {
        console.error("Error adding food item:", error);

        // Handle different types of errors
        if (error.name === "ValidationError") {
            return res.status(400).json({ success: false, message: error.message });
        } else {
            return res.status(500).json({ success: false, message: "An error occurred" });
        }
    }
};

//All food list
const foodList = async(req,res)=>{

    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error  "})
    }

}

//Remove food item
const removeFood = async (req,res)=>{
try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"The food successfully removed"})
} catch (error) {
    res.json({success:false,message:"Error"})
}
}


export { addFoodItem , foodList,removeFood };
