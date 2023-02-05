import mongoose from "mongoose";

const PostSchema = new mongoose.Schema( {
    
} )

const postModel = mongoose.model( "Post", PostSchema )
export default postModel