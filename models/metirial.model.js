const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MetirialSchema = new Schema({

    MetirialID:Number,
    MetirialName:String,
    ExpireDate:{type:Date,default:null}
});

module.exports = module('Metirial',MetirialSchema);
