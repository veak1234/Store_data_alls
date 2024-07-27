const express = require("express");
const app = express();
const PORT = 3000;


const books = [
    {id:1, name:"Rady dreams in 2019"},
    {id:2, name:"How to dream of code?"},
    {id:3, name:"How to kill the covid"}
]

app.listen(PORT, ()=>{
    console.log("http://localhost:" + PORT);
})
app.use(express.static("public"));


app.get("/", (req, res)=>{
    res.send("hello");
})
app.get("/books", (req, res)=>{
    res.send(books);
})