import express from 'express'
import {  deleteData, getdata, getId,  postData, putData, updatedData } from '../controller/todoController.js'
const router = express.Router()

router.get('/',getdata)
router.post('/data',postData)
router.get('/data/:id', getId)
router.put('/data/:id',putData)
router.patch('/data/:id/toggle',updatedData)
router.delete('/data/:id',deleteData)

export default router;