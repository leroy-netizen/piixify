import User from "../models/User.model.js"

// Get a User

export const getUser = (req, res) =>
{
    const { id } = req.params;
    const user = await User
}