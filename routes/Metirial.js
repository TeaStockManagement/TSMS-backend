const express = require('express');
const router = express.Router();

const metirialmodel = require('../models/metirial.model');

router.post('/addmetiral',function(req,res){
    console.log(req.body);
});

module.exports = router;