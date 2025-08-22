const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

// Review Schema
const reviewSchema = new Schema({
  reviewerName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: Types.ObjectId,
    ref: 'Product',
    required: true,
  },
});

// Product Schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['electronics', 'fashion', 'home', 'books'],
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  releaseDate: {
    type: Date,
  },
  reviews: [
    {
      type: Types.ObjectId,
      ref: 'Review',
    },
  ],
});

const Product = model('Product', productSchema);
const Review = model('Review', reviewSchema);

module.exports = {
  Product,
  Review,
};
