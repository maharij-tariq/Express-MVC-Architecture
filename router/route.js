import express from 'express'
import { addData, fetchData, putData, updatedData } from '../controller/fetchData.js';
const router = express.Router();


router.get('/data',fetchData)
router.post('/add-data',addData)
router.put('/update-student/:id',putData)
router.patch('/patch-student/:id',updatedData)

export default router;