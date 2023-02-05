import mongoose from "mongoose";

const PostSchema = new mongoose.Schema( {
    userId: {
        type: String,
        required: 
    }
} )

const postModel = mongoose.model( "Post", PostSchema )
export default postModel