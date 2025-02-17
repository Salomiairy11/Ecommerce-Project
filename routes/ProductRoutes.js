const express = require('express')
const {
  getProduct,
  getProductById,
  getProductByCategoryId,
  getProductByBrandId,
} = require('../controller/ProductController')
const router = express.Router()

router.get('/category/:id', getProductByCategoryId)
router.get('/brand/:id', getProductByBrandId)
router.get('/:id', getProductById)
router.get('/', getProduct)
module.exports = router
