import express from 'express'

// relative paths
import { getFeedPosts, getUserPosts, likePosts } from "../controllers/posts.controllers.js"
import {verifyToken} from "../middleware/auth.middleware"

router = express.Router()

// post


export default router