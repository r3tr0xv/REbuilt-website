const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    status:String,
    idBuyer:{type : mongoose.Schema.Types.String , ref:"user"},
    idOwner:{type : mongoose.Schema.Types.String , ref:"user"},
    idProduct:{type : mongoose.Schema.Types.String , ref:"product"},
});
const orders = mongoose.model("order",orderSchema)
module.exports = orders;