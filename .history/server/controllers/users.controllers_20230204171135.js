import User from "../models/User.model.js"

// Get a User

export const getUser = async(req, res) =>
{
    const { id } = req.params;
    const user = await User.findById( id )
    res.status(200)
}