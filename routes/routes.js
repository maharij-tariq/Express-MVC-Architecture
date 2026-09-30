import express from 'express'
import {getdata,  createuser}  from '../controller/usercontroller.js'
import requestLogger from '../middleware/moddleware.js';

const router = express.Router()

router.get('/',requestLogger,getdata);
router.post('/:id',requestLogger,createuser)

export default router;