import express from 'express';

// relative imports
import
    {
        getUser,
        getUserFriends,
        addRemoveFriend
} from "../controllers/users.controllers"
import {verifyToken} from '../middleware/'

const router = express.Router()



export default router