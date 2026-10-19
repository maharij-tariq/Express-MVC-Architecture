import express from 'express'
import { createData, deleteData, fetchAll, fetchData, fetchDetail, pushData } from "../controller/fetchdata.js"
const router = express.Router()


router.get('/',fetchData)

router.get('/blogs',fetchAll)
router.get('/blogs/:id',fetchDetail)
router.get('/add-blog',createData)
router.post('/add-blog',pushData)
router.get('/delete/:id',deleteData)

export default router