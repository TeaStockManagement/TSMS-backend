var express = require("express");
var router = express.Router();

var Shop = require('../models/shop.model')

router.post('/add',(req,res)=>{
    let shop = new Shop(req.body);
    shop.save().then(shop=>{
        res.json({status:"200",msg:"User added succesfully!!"});
      }).catch(err=>{
        res.send(err);
      })
})

router.get('/all',(req,res)=>{
  Shop.find().then(shop=>{
    res.json({data:shop})
  }).catch(err=>{
    res.status(400).send(err);
  })
})

module.exports = router;
