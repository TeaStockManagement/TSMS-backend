const express = require('express');
const router = express.Router();

const SupplerOrdermodel = require('../models/SupplerOrder.model');

router.post('/addorder',function(req,res){
    console.log(req.body);
});


module.exports = router;