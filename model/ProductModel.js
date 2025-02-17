const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: true,
    },
    Image: { type: String },
    Stock: { type: Number },
    Category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    Price: { type: Number, required: true },
    ProductDes: { type: String },
    Feature: { type: Boolean },
  },
  { timestamps: true }
)
module.exports = mongoose.model('Post', ProductSchema)
