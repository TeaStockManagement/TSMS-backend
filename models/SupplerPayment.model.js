const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplerPayemtSchema  = new Schema({

     SupplerPayemtID:{type:Number,require:true},
     SupplerOrderID:{type:Number,require:true},
     Cash:Number,
     Check:Number,
     Credit:Number,
     ExpireDate:{type:Date,default:null}

});

module.exports = mongoose.model('SupplerPayment',SupplerPayemtSchema);
