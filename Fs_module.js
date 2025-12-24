const fs = require('fs')

fs.readFile('content.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
fs.writeFile('sample.txt','we are ready to learn MERN',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file has been created")
    }
})