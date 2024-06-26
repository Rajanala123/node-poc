var express = require('express');
var router = express.Router();
var service=require('../service/empservice');
var cors=require('cors');
router.use(cors())

let corsOptions={
    origin:'*'
};
router.get('/empget',cors(corsOptions),service.getdata)
// module.exports=router;
module.exports = (req, res) => {
    res.status(200).json({ message: "Hello from emproutes.js!" });
  };
  