import express from 'express'
import { userData } from '../controller/user.js'
const router = express.Router()


router.post('/signup',userData)


export default router;