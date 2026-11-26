import express from 'express'
import { addItemCart, deleteCart, fetchCart, updatedCart } from '../controller/logicCart.js'

const router = express.Router()


router.post('/add',addItemCart)
router.post('/update',updatedCart)
router.post('/delete',deleteCart)
router.get('/:userId', fetchCart)

export default router;