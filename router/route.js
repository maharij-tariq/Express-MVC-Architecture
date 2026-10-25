import express from 'express'
import { addData, deleteData, fetchData, putData, updatedData } from '../controller/fetchData.js';
const router = express.Router();


router.get('/data',fetchData)
router.post('/add-data',addData)
router.put('/update-student/:id',putData)
router.patch('/patch-student/:id',updatedData)
router.delete('/delete-student/:id',deleteData)
export default router;