import express from "express";

// relative paths
import {
  getFeedPosts,
  getUserPosts,
  likePosts,
} from "../controllers/posts.controllers.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import router from "./auth.routes.js";

router = express.Router();

// get
router.get("/", verifyToken, get)

export default router;
