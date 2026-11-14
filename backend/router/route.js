import express from 'express'
import { userData } from '../controller/user.js'
import { loginData } from '../controller/Login.js'
const router = express.Router()


router.post('/signup',userData)
router.post('/login',loginData)


export default router;