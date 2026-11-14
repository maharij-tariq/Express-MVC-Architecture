import express from 'express'
import { deleteData, getData, productcCreate, updateData } from '../controller/product.js'
const router = express.Router()


router.post('/add',productcCreate)
router.get('/',getData);
router.put('/update/:id',updateData);
router.delete('/delete/:id',deleteData)


export default router;