import express from 'express'
import { addData, fetchData } from '../controller/fetchData.js';
const router = express.Router();


router.get('/data',fetchData)
router.post('/add-data',addData)

export default router;