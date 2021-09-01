





let express = require("express");
let data = require("./tempData.json");



let server = express();


server.get("/data",(req,res)=>{
    res.json(data);    
})



server.listen(4000);