import express from 'express'

// relative paths
import {getFeedPosts, getUserPosts, likePosts } from "../co"

router = express.Router()

// post

router.post("/:id")

export default router