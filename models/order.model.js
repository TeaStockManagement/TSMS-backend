var mongoose = require('mongoose');

var orderSchema=mongoose.Schema({
    shopName: String,
    date:String,
    details:[{
        itemName:String,
        quantity:Number,
        price:Number
    }],
    billTotal:Number
    });

var order = mongoose.model('Order', orderSchema);
module.exports = order;