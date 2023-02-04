import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.model.js'

// Register user
const registerUSer = async ( req, res ) =>
{
    try
    {
      const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
      } = req.body
        
        const salt = await bcrypt.genSalt(10)
        
    } catch ( err )
    {
        console.log(err)
    }
}