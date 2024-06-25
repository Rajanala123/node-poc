var connection=require('../connection/dbconnection')

var getdata=function(req,res){
    let query="select *from employee"
    connection.query(query,function(err,data){
        if(!err){
            res.send(data)
        }
        else{
            res.send(400).send(err)
        }
    })
}
module.exports={getdata:getdata}