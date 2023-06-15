const mongoose = require('mongoose');
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-plugin-autoinc');

const productSchema = new Schema({
    //WITHOUT ANY RESTRICTION 
      /* id :Number,
      title: { type: String},
      description: String,
      price: { type: Number} ,
      discountPercentage: { type: Number},
      rating: { type: Number},
      stock: Number,
      brand: { type: String},
      category: { type: String },
      thumbnail: { type: String },
      images: [String]
      */
    title: { type: String, required: true },
    description: String,
    price: { type: Number, min: [0, 'Error min price not Possible'], required: true },
    discountPercentage: { type: Number, min: [0, 'Error min discount'], max: [50, 'Error max discount'] },
    rating: { type: Number, min: [0, 'Error min rating'], max: [5, 'Error max rating'] , default:0},
    stock: Number,
    brand: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: [String]
})

productSchema.plugin(AutoIncrement.plugin, {
  model: 'Product',
  field: 'id',
  startAt: 20,
  incrementBy: 1
});

exports.Product = mongoose.model('Product', productSchema);