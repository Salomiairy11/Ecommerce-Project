const categories = require('../model/CategoryModel')

exports.getCategory = async (req, res) => {
  try {
    let category = await categories.find()
    if (!category) {
      res.status(404).json({ error: 'No category found' })
    }
    res.send(category)
  } catch (err) {
    return res
      .status(400)
      .json({ error: err.message, detail: 'Category not found' })
  }
}

exports.getCategoryById = async (req, res) => {
  try {
    let category = await categories.findById(req.params.id)
    if (!category) {
      res.status(404).json({ error: 'category not found' })
    }
    res.send(category)
  } catch (err) {
    return res
      .status(400)
      .json({ error: err.message, detail: 'Category not found' })
  }
}




