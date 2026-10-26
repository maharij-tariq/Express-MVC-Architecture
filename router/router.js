import express from 'express'
import {getData,  postData } from '../controller/fetchData.js'
const router = express.Router()

router.get('/data',getData)
router.post('/student',postData)

export default router;