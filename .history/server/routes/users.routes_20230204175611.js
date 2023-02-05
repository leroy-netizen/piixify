import express from "express";

// relative imports
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.controllers.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// desc: get a single user
// @method GET
// @path /users
// @access private

router.get("/:id", verifyToken, getUser);

// desc: get a single user friends
// @method GET
// @path /users/:id/friends
// @access private

router.get(":/id/friends", verifyToken, getUserFriends);

// desc: update friends list (add or remove a user's friend)
// @method PATCH
// @path /users/:id/:friendId
// @access private
router.patch("/:id/:friendId", verifyTokenifyToken, addRemoveFriend);

export default router;
