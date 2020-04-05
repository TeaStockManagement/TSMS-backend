const express = require('express');
const router = express.Router();

const TeaQuality = require('../models/TeaQuality.model');
 

router.post('/addteaquality',function(req,res){

    
     const newquality = new TeaQuality({
        quality:req.body.qualityadd
     });


    TeaQuality.savequality(newquality,function(err,newquality){
     
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(newquality){
            res.json({state:true,msg:"data inserted"});
        }
    });
    
});


module.exports = router;

