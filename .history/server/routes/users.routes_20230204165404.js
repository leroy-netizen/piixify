import express from 'express';

// relative imports
import
    {
        getUser,
        getUserFriends
} from "../controllers/users.controllers"

const router = express.Router()



export default router