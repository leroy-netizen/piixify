import User from "../models/User.model.js"


export const createPost = async (req, res) =>
{
    try {
        const { userId, picturePath, desription } = req.body;
        const user = User.find
        
    } catch (err) {
        res.status(409).json({"message": err.message})
    }
    
     

}