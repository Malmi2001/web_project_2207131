import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://HappyPlate:happYplatE2024@cluster0.r1hf3.mongodb.net/HappyPlate',
          
        );
        console.log("Database Successfully Connected");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); 
    }
};
