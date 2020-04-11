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


router.get('/allteaquality',function(req,res){
    TeaQuality.collection.find({ExpireDate:null}).toArray(function(err,result){
        if(err) throw err;
        res.json({result:result});
    })
})


router.put('/deleteQuality',function(req,res){
    TeaQuality.findOneAndUpdate({_id:req.body.deleteID},{ $set: { ExpireDate: '1' }},{new: true}).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })
});


module.exports = router;

