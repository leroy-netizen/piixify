import User from "../models/User.model.js"

// Get a User

export const getUser = async(req, res) =>
{
    try
    {
        const { id } = req.params;
        const user = await User.findById( id )
        res.status(200).json(user)
        
    }
}