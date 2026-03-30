const express = require("express");
const app = express();
const port = 1111 ;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let{user,password}=req.query
    res.send(`standard GET response ! Welcome ${user},${password}`);
});

app.post("/register",(req,res)=>{
    let{user,password}=(req.body)
    res.send(`standard POST response ${user},${password}`);
});

app.listen(port , ()=>{
    console.log(`listening to port :${port}`)
});