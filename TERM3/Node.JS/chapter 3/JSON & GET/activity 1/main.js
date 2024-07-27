
const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
});
app.use(express.static("public"));

const book = [
    {id:1, name:"Rady dreams in 2019"},
    {id:2, name:"how dreams in 2020"},
    {id:3, name:"Rady dreams in 2000"},
];
app.get("/", (req, res)=>{
    res.send("Hello");

    // console.log("hello");
})

app.get("/book", (req, res) =>{
    let id = req.query.id;
    if(id < books.length){
        let book = books[id];
        res.send(book.name)
    }
    else{
        res.send("Book not found!")
    }
})

