import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

// Register user
export const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash( password, salt );

    const newUser = new User({
      firstName,
      Impressions: lastName,
      lastName,
      email,
      password: hashedPassword,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    //   status code 201 === created
  } catch (err) {
    res.status(500).json({ error: err.message });
}
};

// LOG THE USER IN
export const login = async ( req, res ) =>
{
    try
    {
        // destrucure email and password from request body  
        const { email, password } = await req.body
        const user = await User.findOne( { email: email } )
        if (!user) {
            return res.status(400).json({mesage: "User not found "})
        } 
        
        // check if user password matches the given password
        const isMatch = await bcrypt.compare( password, user.password );
        if ( !isMatch ) return res.status( 400 ).json( { "message": "Invalid credentials entered" } )
        
        // Generate our access token
        const token = jwt.sign( { id: user._id }, process.env.JWT_SECRET_KEY )
        delete user.password;
        res.status(200).json({token, user})
    } catch ( err )
    {
        res.status(500).json({ error: err.message });
        
    }
}
