import express from 'express'
import cors from "cors"
import {connectDB} from "./config/db.js"
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import 'dotenv/config'
import orderRouter from './routes/orderRoute.js';
//app config
const app= express();
const port = 6060

//middleware

app.use(express.json());// for pass  request from frontend to backend 
app.use(cors()); // to access backend from frontend


//Database Connection 
connectDB();

//Api End Points
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("./api/cart",cartRouter)
app.use("./api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API IS OK");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something Went Wrong');
});

app.listen(port,()=>{
    console.log(`Server Listen on http://localhost:${port}`);
});

//mongodb+srv://HappyPlate:<db_password>@cluster0.r1hf3.mongodb.net/?