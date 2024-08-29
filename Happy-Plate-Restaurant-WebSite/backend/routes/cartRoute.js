import express from 'express'
import { addToCart , removeFromCart, getCart } from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js';
const app=express();

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware, addToCart);
cartRouter.post("/remove",authMiddleware, removeFromCart);
cartRouter.post("/get",authMiddleware, getCart);



app.use("/api/cart",cartRouter)

app.get("/",(req,res)=>{
    res.send("Api is ok");
})

export default cartRouter;