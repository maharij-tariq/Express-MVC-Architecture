import express from 'express'
import {  getdata, postData } from '../controller/todoController.js'
const router = express.Router()

router.get('/',getdata)
router.post('/data',postData)

export default router;