import User from "../models/User.model.js";
import Post from "../models/Post.model.js";

export const createPost = async (req, res) => {
  try {
    const { userId, picturePath, description } = req.body;
    const user = User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      picturePath,
      userPicturePath: user.picturePath,
      location: user.location,
      description,
      likes: {},
      comments: [],
    } );
      
    await newPost.save
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
