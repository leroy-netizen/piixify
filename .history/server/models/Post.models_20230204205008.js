import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
    location: String,
  userPicturePath:  Str
});

const postModel = mongoose.model( "Post", PostSchema )
export default postModel