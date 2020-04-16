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


router.post('/deleteQuality',function(req,res){
    TeaQuality.findOneAndUpdate({_id:req.body.deleteID},
        { $set: { ExpireDate: '1' }},
        {new: true}).then(data => {
            res.json({state:true,msg:"Item Successfully Deleted !!"});
        //console.log(msg);
    }).catch(err=>{
        res.state(false).send(err);
       // console.log(err);
    })
});

router.post('/updateTeaQuality',function(req,res){
    console.log(res.body);
    TeaQuality.findOneAndUpdate({_id:req.body.qualityID},{ $set: { quality:req.body.qualityupdate }},{new: true}).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })
});

module.exports = router;

