import express from 'express'
import { fetchData, showData } from '../controller/fetchData.js'
const router = express.Router()

router.get('/data',fetchData)
router.get('/student',showData)

export default router;