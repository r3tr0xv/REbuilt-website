const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:String,
    price:String,
    description:String,
    category:String,
    region:String,
    image:String,
    idOwner:{type : mongoose.Schema.Types.String , ref:"user"},
});
const products = mongoose.model("product",productSchema)
module.exports=products;