import User from "../models/User.model.js"
import Post from 


export const createPost = async (req, res) =>
{
    try {
        const { userId, picturePath, desription } = req.body;
        const user = User.findById(userId)
        const newPost = new P
    } catch (err) {
        res.status(409).json({"message": err.message})
    }
    
     

}