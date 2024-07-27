const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const { join } = require("path");
const PORT = 3000;

function save(){
    fs.writeFileSync("database.json", JSON.stringify(data));
}

app.use(express.static("public"));
app.use(cors({origin:"*"}));
app.use(express.urlencoded());
app.use(express.json());

let data = JSON.parse(fs.readFileSync("database.json"));

app.listen(PORT, (e) => {
    console.log("Server is running");
});

app.get("/students", (req, res) => {
    res.json({status: 200, message: "Requst successfully", data: data});
});

app.post("/students/create", (req, res) => {
    let student = req.body;
    data.push(student);
    save();
    res.json({status: 200, message: "Student created", student: student});

});

app.delete("/student/delete/:id", (req, res) => {
    let id = req.params.id;
    if (data.length > id){
        data.splice(id, 1);
        save()
        res.json({status: 200, message:"student deleted successfully"})
    }else{
        res.json({status: 200, message:"student deleted successfully"})

    }
});

