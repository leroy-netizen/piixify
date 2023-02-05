import express from 'express';

// relative imports
import
    {
        getUser,
        getUserFriends,
        addRemoveFriend
} from "../controllers/users.controllers"
import {verifyToken} from '../middleware/auth.middleware.js'

const router = express.Router()


// @method GET
// @path /users
// @access private

router.get("/:id", verifyToken, getUser)


export default router