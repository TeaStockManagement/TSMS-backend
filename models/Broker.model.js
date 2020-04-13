const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brokerShema = new Schema({
   
    name:String,
    mobile:Number,
    email:String,
    vatRegNo:String,
    address:String,
    ExpireDate:{type:String,default:null}

});

module.exports = mongoose.model('Broker',brokerShema);
