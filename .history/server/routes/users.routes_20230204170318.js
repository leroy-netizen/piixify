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


// desc: get a single user
// @method GET
// @path /users
// @access private

router.get( "/:id", verifyToken, getUser )
router.get(":/id/friends")


export default router