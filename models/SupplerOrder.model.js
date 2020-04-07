const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplerOrderSchema = new Schema({
  
    SupplerOrderID:{type:Number,require:true},
    UserID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'},
    OrderDate:{type:Date,require:true},
    DiliverDate:{type:Date,require:true},
    TotalBill:{type:Number,require:true},
    ExpireDate:{type:Date,default:null}

});


 module.exports = mongoose.model("SupplerOrder",SupplerOrderSchema);

