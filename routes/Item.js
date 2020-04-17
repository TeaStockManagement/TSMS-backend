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


router.get('/getAllItem',function(req,res){
    console.log(req.body);
    teaItem.collection.find({ExpireDate:null}).toArray(function(err,result){
        if(err) throw err;
        res.json({result:result});
        
    });
});


router.put('/deleteItem',function(req,res){
    teaItem.findOneAndUpdate({_id:req.body.deleteID},{ $set: { ExpireDate: '1' }},{new: true}).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })
});

router.post('/updateItem',function(req,res){

    console.log(req.body);
//    let item = new teaItem(req.body)
//     teaItem.findOneAndUpdate({_id:item._id},item.save(),{new: true}).then(data=>{
//         console.log(data);
//     }).catch(err=>{
//         console.log(err);
//     })
});



module.exports = router;