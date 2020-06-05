//Review / rating / createdAt/ ref to tour/ref to user

const mongoose = require('mongoose');
const Product = require('./productModel');

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    cart:{type:mongoose.Schema.ObjectId,required:true}
   
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Order = mongoose.model('Order', reviewSchema);

module.exports = Order;

//post /tour /
//get /tour/id/reviews
//get / tour /id/review/dsdasda
