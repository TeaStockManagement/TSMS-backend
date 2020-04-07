const express = require('express');
const router = express.Router();

const SupplerOrdermodel = require('../models/SupplerOrder.model');

router.post('/addorder',function(req,res){
    console.log(req.body);
});

router.get('/getorderdata',function(req,res){
    
})

module.exports = router;