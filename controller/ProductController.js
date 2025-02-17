const Product = require('../model/ProductModel')
const Category = require('../model/CategoryModel')
const Brand = require('../model/BrandModel')

exports.getProduct = async (req, res) => {
  try {
    let product = await Product.find()
      .populate('Category', 'Category_name')
      .populate('Brand', 'Brand_name')
    if (!product) {
      return res.status(400).json({ message: 'No product found' })
    }
    return res.status(200).json(product)
  } catch (err) {
    return res
      .status(400)
      .json({ message: err.message, detail: 'Product not found' })
  }
}

exports.getProductById = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id).populate(
      'Category',
      'Category_name'
    ).populate('Brand', 'Brand_name')
    if (!product) {
      res.status(404).json({ error: 'product not found' })
    }
    res.send(product)
  } catch (error) {
    return res
      .status(400)
      .json({ message: error.message, detail: 'Product not found' })
  }
}

exports.getProductByCategoryId = async (req, res) => {
  try {
    let category = await Category.findById(req.params.id)
    if (!category) {
      console.log('Category not found in database.')
      return res.status(404).json({ message: 'Category not found' })
    }

    let products = await Product.find({
      Category: req.params.id,
    }).populate('Category', 'Category_name')

    if (!products || products.length === 0) {
      console.log('No products found for this category.')
      return res.status(404).json({ message: 'Product not found in category' })
    }

    res.json(products)
  } catch (err) {
    console.error('Error:', err.message)
    return res
      .status(400)
      .json({ err: err.message, detail: 'Category Not Found' })
  }
}

exports.getProductByBrandId = async (req, res) => {
  try {
    let brand = await Brand.findById(req.params.id)
    if (!brand) {
      console.log('Brand not found in database.')
      return res.status(404).json({ message: 'Brand not found' })
    }

    let products = await Product.find({
      Brand: req.params.id,
    }).populate('Brand', 'Brand_name')

    if (!products || products.length === 0) {
      console.log('No products found for this brand.')
      return res.status(404).json({ message: 'Product not found in brand' })
    }

    res.json(products)
  } catch (err) {
    console.error('Error:', err.message)
    return res.status(400).json({ err: err.message, detail: 'Brand Not Found' })
  }
}