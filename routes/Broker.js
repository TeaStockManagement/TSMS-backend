const express = require('express');
const router = express.Router();

const broker = require('../models/Broker.model');

router.post('/addbroker',function(req,res){
    console.log(req.body);
   broker.findOne({
       name:req.body.name,
       ExpireDate:null
   },function(err,user){
       if(err) throw err;
       else if(user){
        res.json({ success: false, msg: 'The Broker Already Exit.' });
       }
       else{
          let brokeruser = new broker(req.body);
          brokeruser.save().then(brokeruser=>{
            res.json({status:"200",msg:"Broker added succesfully!!"})
          }).catch(err=>{
              res.status(400).send(err);
          })

       }
   });
});


router.get('/getAllBroker',function(req,res){
    broker.collection.find({ExpireDate:null}).toArray(function(err,result){
        if(err) throw err;
        res.json({result:result});
    });
});

router.put('/deleteBroker',function(req,res){
    broker.findOneAndUpdate({_id:req.body.deleteID},{ $set: { ExpireDate: '1' }},{new: true}).then(data=>{
        
    }).catch(err=>{
       res.status(400).send(msg);
    })
});

module.exports = router;