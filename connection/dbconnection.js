const mysql=require("mysql2")
var connection=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"password",
    database:"employee-project"
})
connection.connect(function(err){
    if(!err){
        console.log("connection is established")
    }
    else{
        console.log("Connection is not established",err)
    }
})
module.exports=connection