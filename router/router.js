import express from 'express'
import {deleteData, getData,  postData, putData, updatedData } from '../controller/fetchData.js'
const router = express.Router()

router.get('/data',getData)
router.post('/student',postData)
router.put('/student/:id',putData)
router.patch('/student/:id',updatedData)

export default router;