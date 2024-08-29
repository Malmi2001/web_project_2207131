// foodRoutes.js

import express from "express";
import { addFoodItem,foodList,removeFood } from "../controllers/foodController.js"; 
import multer from "multer";

const foodRouter = express.Router();

// Create Image Storage
const storage = multer.diskStorage({
  destination: "uploads", 
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage });

// Define food routes
foodRouter.post("/add", upload.single("Image"), addFoodItem); // Use "Image" as the field name
foodRouter.get("/list",foodList )
foodRouter.post("/remove",removeFood);


export default foodRouter;
