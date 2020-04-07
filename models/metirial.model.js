const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MetirialSchema = new Schema({

    MetirialName:String,
    CretionDate:{type:Date,default:Date.now},
    ExpireDate:{type:Date,default:null}
});

module.exports = mongoose.model('Metirial',MetirialSchema);

module.exports.savemetirial = function(newMetirial,callback){

    //if(err) throw err;
    newMetirial.save();
   // console.log(callback);
  
}
