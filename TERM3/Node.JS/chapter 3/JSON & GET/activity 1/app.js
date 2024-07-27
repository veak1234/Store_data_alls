
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

