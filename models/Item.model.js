const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({

    Item:String,
    BuyUnitPrice:String,
    SellUnitPrice:String,
    CretionDate:{type:Date,default:Date.now},
    ExpireDate:{type:String,default:null}
});

module.exports = mongoose.model('Item',ItemSchema);

module.exports.saveItem = function(newItem,callback){
 
    newItem.save(callback);  
}
