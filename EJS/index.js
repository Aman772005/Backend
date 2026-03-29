const express = require("express");
const app = express();
const path = require("path");

const port = 3333 ;

app.use(express.static(path.join(__dirname ,"public/css")));
app.use(express.static(path.join(__dirname ,"public/js")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/ig/:username",(req,res) =>{
    const {username} = req.params ;
    const instaData = require("./data.json")
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error")
    }
    
})
app.get("/rolldice",(req,res)=>{
    let diceval = Math.floor(Math.random()*6)+1 ;
    res.render("rolldice" , {diceval})
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});