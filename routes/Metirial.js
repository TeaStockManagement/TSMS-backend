const express = require('express');
const router = express.Router();

const metirialmodel = require('../models/metirial.model');

router.post('/addmetiral',function(req,res){
    

  const newMetirial = new metirialmodel({
    MetirialName:req.body. metirialadd
  });
  console.log(newMetirial);

  metirialmodel.savemetirial(newMetirial,function(err){

    if(err){
      // Console.log(err);
    }
    if(newMetirial){
      //  Console.log(newMetirial);
    }
         
  });

});

module.exports = router;