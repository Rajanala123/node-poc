var express = require('express');
var router = express.Router();
var service=require('../service/empservice');
var cors=require('cors');
router.use(cors())

let corsOptions={
    origin:'*'
};
router.get('/empget',cors(corsOptions),service.getdata)
module.exports=router;