import express from "express";

// relative paths
import {
  getFeedPosts,
  getUserPosts,
  likePost,
} from "../controllers/posts.controllers.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import router from "./auth.routes.js";

router = express.Router();

/* Read */
router.get("/", verifyToken, getFeedPosts);
router.get( "/:userId", verifyToken, getUserPosts );

// UPDATE   
router.patch( "/:id/like", verifyToken, likePosts)

export default router;
