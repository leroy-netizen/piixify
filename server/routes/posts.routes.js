import express from "express";

// relative paths
import {
  getFeedPosts,
  getUserPosts,
  likePost,
} from "../controllers/posts.controller.js";

import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

/* Read */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId", verifyToken, getUserPosts);

// UPDATE
router.patch("/:id/like", verifyToken, likePost);

export default router;
