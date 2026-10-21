import express from 'express'
import requestLogger from '../middleware/middleware.js'
import { fetchData } from '../controller/fetchdata.js'
const router = express.Router()


router.get('/student',requestLogger,fetchData)

export default router;