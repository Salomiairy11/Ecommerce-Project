const express = require('express')
const {
  getBrand,
  getBrandById,
} = require('../controller/BrandController')
const router = express.Router()
router.get('/', getBrand)
router.get('/:id', getBrandById)
module.exports = router
