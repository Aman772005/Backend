const express = require("express")
const app = express();

console.dir(app);

let port = 3333 ;

app.listen(port ,()=>{
    console.log(`app is lisenting on port ${port}`);
});

app.use((req,res)=>{
    //console.log(req)
    console.log("request received");
    let obj = {
        name : "Aman",
        age : 20 ,
    }
    let code = "<h1>Friuts</h1> <ul><li>orange</li><li>apple</li></ul>"
    res.send( code);
});
