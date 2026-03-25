const express = require("express");
const app = express();

const port = 3333 ;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

app.get("/" , (req,res)=>{
    res.send("THis is message")
})