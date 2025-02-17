const mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema(
  {
    Category_name: {
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
module.exports = mongoose.model('Category', CategorySchema)
