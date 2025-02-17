const mongoose = require('mongoose')
const BrandSchema = new mongoose.Schema(
  {
    Brand_name: {
      type: String,
      required: true,
      unique: true,
    },
    Description: {
      type: String,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model('Brand', BrandSchema)
