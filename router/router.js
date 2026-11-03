import express from 'express'
import { createData, findData, getProfile, homeRoute } from '../controller/login.js'
import  {auth}  from '../middleware/middleware.js';
const router = express.Router()

router.get('/',homeRoute);
router.post('/data',createData);
router.post('/login',findData);
router.get('/profile',auth,getProfile)


export default router;