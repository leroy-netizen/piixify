import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

// Register user
const registerUSer = async (req, res) => {
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

    const salt = await bcrypt.genSalt();
    const hashedPassword = bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      Impressions: lastName,
      email,
      password: hashedPassword,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    } );
      
      const savedUser = await newUser.save()
      res.status( 201 ).json( savedUser )
    //   status code 201 === created
  } catch (err) {
    res.status(500).json({error: err.messa})
  }
};
