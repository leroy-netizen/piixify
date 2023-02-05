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
    });

    await newPost.save();
    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// READ
export const getFeedPosts = async (req, res) => {
  try {
    const allPosts = Post.find();
    res.status(200).json(allPosts)``;
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const userPosts = Post.find({ userId });
    res.status(200).json(userPosts);
  } catch (err) {
    res.status(404).json({ message: err.mesage });
  }
};

// UPDATE

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
      const { userId } = req.body;
      
      const likedPost = Post.findById( id )
      const isLiked = likedPost.likes.get(userId)
      res.status( 200 ).json();
      
      if ( isLiked )
      {
          likedPost.likes.delete(userId)
      } else
      {
          likedPost.likes.set(userId, true)
      }

      const updatedPost = await 
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
