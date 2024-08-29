import jwt from "jsonwebtoken";

const authMiddleware= async (req,res,next) => {
    const {token} = req.headers;

    if (!token) {
        return res.json({success:false,message:"NOT AUTHORIZED PLEASE LOGIN AGAIN "});
    }

    try {
       const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);
       req.body.userId= tokenDecode.id;
       next();
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:"Error occurred"});
    }

}

export default authMiddleware;