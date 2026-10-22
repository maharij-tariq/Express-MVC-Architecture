import express from 'express'
import requestLogger from '../middleware/middleware.js'
import {handleData } from '../controller/fetchdata.js'
const router = express.Router()


router.get('/data',handleData)


export default router;