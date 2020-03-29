const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PackageSchema = new Schema({
    
    PackageID:Number,
    SupplerOrderID:Number,
    MetirialID:Number,
    PackageID:Number,
    Qty:Number,
    PackageName:String,
    UnitPrice:Number,
    Color:String

})