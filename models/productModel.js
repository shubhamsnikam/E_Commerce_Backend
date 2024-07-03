const mongoose = require('mongoose');

const productSchema=mongoose.Schema({
    name:{type:String},
    discription:{type:String,require:false},
    category:{type:String,require:false},
    price:{type:Number},
    quantity:{type:Number}
})


// Create & Export Collection
const Product = mongoose.model("Product",productSchema);
module.exports = Product;

// {
// "name":"Mobile",
// "discription":"This is Mobile",
// "category":"Electronic Device",
// "price":"9999",
// "quantity":"100"
// }