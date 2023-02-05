import express from 'express'

// relative paths
import { getFeedPosts, getUserPosts, likePosts } from "../controllers/posts.controllers.js"
import {verifyToken}

router = express.Router()

// post


export default router