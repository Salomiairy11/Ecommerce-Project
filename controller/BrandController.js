const brands = require('../model/BrandModel')

exports.getBrand = async (req, res) => {
  try {
    let brand = await brands.find()
    if (!brand) {
      res.status(404).json({ error: 'No brand found' })
    }
    res.send(brand)
  } catch (err) {
    return res
      .status(400)
      .json({ error: err.message, detail: 'brand not found' })
  }
}

exports.getBrandById = async (req, res) => {
  try {
    let brand = await brands.findById(req.params.id)
    if (!brand) {
      res.status(404).json({ error: 'brand not found' })
    }
    res.send(brand)
  } catch (err) {
    return res
      .status(400)
      .json({ error: err.message, detail: 'brand not found' })
  }
}




