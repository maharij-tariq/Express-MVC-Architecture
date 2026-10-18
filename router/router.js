
import express from 'express';
import { fetchedData } from '../controller/fetchdata.js';

const router = express.Router();

router.get('/student/:id', fetchedData);

export default router;
