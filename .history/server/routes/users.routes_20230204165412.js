import express from 'express';

// relative imports
import
    {
        getUser,
        getUserFriends,
        adRemoveFriend
} from "../controllers/users.controllers"

const router = express.Router()



export default router