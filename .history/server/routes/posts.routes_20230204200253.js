import express from 'express'
import router from './auth.routes'
router = express.Router()

// post

router.post("/:id")

export default router