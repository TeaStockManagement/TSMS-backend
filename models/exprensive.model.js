const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ExpensiveSchema = new Schema({

    ExpensiveID:Number,
    ExpensiveType:String,
    Amount:Number,
    Date:Date,
    UserID:Number

});

module.exports = mongoose.model('Expensive',ExpensiveSchema);