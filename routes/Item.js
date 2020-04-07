const express = require('express');
const router = express.Router();

const teaItem = require('../models/Item.model');

router.post('/additem',function(req,res){

    
    const newItem = new teaItem({
        Item:req.body.item,
        BuyUnitPrice:req.body.buyprice,
        SellUnitPrice:req.body.sellprice
    });


    teaItem.saveItem(newItem,function(err,newItem){
    
       if(err){
           res.json({state:false,msg:"data not inserted"});
       }
       if(newItem){
           res.json({state:true,msg:"data inserted"});
       }
   });
   
});

module.exports = router;