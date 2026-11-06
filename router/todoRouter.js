import express from 'express'
import {  getdata, getId, postData } from '../controller/todoController.js'
const router = express.Router()

router.get('/',getdata)
router.post('/data',postData)
router.get('/data/:id', getId)

export default router;