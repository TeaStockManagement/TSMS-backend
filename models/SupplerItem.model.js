const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SupplerItem = new Schema({
   
    SupplerItemID:Number,
    SupplerOrderID:{type:Number,require:true},
    ItemID:{type:Number,require:true},
    Qty:{type:Number,require:true},
    PackageItem:{type:String,require:true},
    ExpireDate:{type:Date,default:null}

});
