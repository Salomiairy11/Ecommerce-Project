const express = require('express')
const {
  getCategory,
  getCategoryById,
} = require('../controller/CategoryController')
const router = express.Router()
router.get('/', getCategory)
router.get('/:id', getCategoryById)
module.exports = router
