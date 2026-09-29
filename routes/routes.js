const express = require('express');
const router = express.Router();
const {findProductHandler, getallProduct}=  require('../controller/product')

const requestLogger= require('../middleware/moddleware')

router.post('/getproduct', findProductHandler)
router.get('/getAllproduct',requestLogger , getallProduct)



module.exports = router;