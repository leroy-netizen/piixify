import mongoose from "mongoose";

const PostSchema = new mongoose.Schema( {
    userId:
} )

const postModel = mongoose.model( "Post", PostSchema )
export default postModel