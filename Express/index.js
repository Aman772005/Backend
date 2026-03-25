const express = require("express")
const app = express();

console.dir(app);

let port = 3333 ;

app.listen(port ,()=>{
    console.log(`app is lisenting on port ${port}`);
});

// app.use((req,res)=>{
//     //console.log(req)
//     console.log("request received");
//     let obj = {
//         name : "Aman",
//         age : 20 ,
//     }
//     let code = "<h1>Friuts</h1> <ul><li>orange</li><li>apple</li></ul>"
//     res.send( code);
// });

app.get("/",(req,res)=>{
    res.send("you contected root path")
})

app.get("/apple",(req,res)=>{
    res.send("you contected apple path")
})

app.get("/banana",(req,res)=>{
    res.send("you contected banana path")
})

// ***  this is for old version now it is not working *** // 

// app.get("/*",(req,res)=>{
//     res.send("you are on wrong path");
// });

// app.get('/*', (req, res) => {
//   res.send('Not Found');
// });

// app.use((req, res) => {
//   res.status(404).send('this is not avilable');
// });

app.post("/", (req, res) => {
    res.send("you post ");
});

app.get(("/:username/:id"),(req,res)=>{
    let {username , id} = req.params ;
    let htmlstr = `<h1>welcome to the page of ${username}, of id = ${id}</h1>`
    res.send(htmlstr);
});

app.get("/search",(req,res)=>{
    let {q}= req.query ;
    if(!q){
        res.send(`<h1>Nothing have been searched</h1>`)
    }
    res.send(`<h1>this is query ${q} </h1>`);
});

