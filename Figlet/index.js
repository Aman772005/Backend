const figlet = require('figlet');

figlet("hii",function(err,data){
    if(err){
        console.log("Something is wrong")
        return ;
    }else{
        console.log(data)
    }
}) ;