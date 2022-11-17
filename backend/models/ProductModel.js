const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
    category: {
      required: true,
      type: String,
    },
    phoneNumber: {
      required: true,
      type: Number,
    },
    image1: {
      required: true,
      type: String,
    },
    image2: {
      required: true,
      type: String,
    },
    image3: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    createdBy: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("product", productSchema);
