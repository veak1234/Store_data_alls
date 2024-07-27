
const express = require("express");
const app = express();
const fs = require('fs');
const PORT = 4000;

let data = JSON.parse(fs.readFileSync("sever.json"));

// === sev data =====
function save(){
    fs.writeFileSync("sever.json", JSON.stringify(data));
}

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(PORT, ()=>{
    console.log("hello sever", PORT)
});

//==== get data from the sever.json =====
app.get("/students",(req, res)=>{
    res.json({status: 200, message: "Requst successfully", data: data});
});

// ==== add data to the sever json ======
app.post("/students/creat", (req, res)=>{
    let student = req.body;
    data.push(student);
    save()
    res.json({status: 200, message: "Requst successfully", data: data});
});

// ==== delete data ======
app.delete("/students/delete/:id", (req, res)=>{
    let id = req.params.id;
    if(data.length>id){
        data.splice(id,1);
        save();
        res.json({status: 200, massage: "status deleted successfully"});
    }else{
        res.json({status: 200, massage: "status deleted successfully"});
        
    }
})

// === update data ====
app.put("/student/update/:id", (req, res) =>{
    let id = req.params.id;
    let student = req.body;
    // res.send(student)
    if(data.length > id){
        let studentname = {...student};
        data[id]= studentname;
        save()
        res.json({status: 200, massage: "status deleted successfully"});
    }else{
        res.json({status: 404, massage: "status deleted successfully"});

    }

})