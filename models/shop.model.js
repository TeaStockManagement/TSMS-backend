var mongoose = require('mongoose');

var shopSchema=mongoose.Schema({
    name: String,
    address:String,
    mobile:String
});

var Shop = mongoose.model('Shop', shopSchema);
module.exports = Shop;