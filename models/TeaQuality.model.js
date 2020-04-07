const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeaQlityScheam = new Schema({

    quality:String,
    CretionDate:{type:Date,default:Date.now},
    ExpireDate:{type:Date,default:null}
});

module.exports = mongoose.model('TeaQuality',TeaQlityScheam);

module.exports.savequality = function(newquality,callback){
 
        newquality.save(callback);  
}