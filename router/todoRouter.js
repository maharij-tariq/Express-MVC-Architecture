import express from 'express'
import { firstData, postData } from '../controller/todoController.js'
const router = express.Router()

router.get('/',firstData)
router.post('/data',postData)

export default router;