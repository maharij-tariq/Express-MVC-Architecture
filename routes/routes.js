import express from 'express'
import {getdata,  createuser, updateUser, pathUser, deleteUser}  from '../controller/usercontroller.js'
import requestLogger from '../middleware/moddleware.js';

const router = express.Router()

router.get('/',requestLogger,getdata);
router.post('/:id',requestLogger,createuser)
router.put('/:id',updateUser)
router.patch('/:id',pathUser)
router.delete('/:id',deleteUser)

export default router;