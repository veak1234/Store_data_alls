const express = require("express");
const app = express();

app.listen(4000, () => {
  console.log("Welcome to hell");
});

const teacherScore = {
  ronan : 45,
  rady : 34,
  him : 30
}
app.get("/result", (req, res) =>{
  let name = req.query.name;
  let score = teacherScore[name];
  res.send("Score for teacher " + name + " is " + score);
})

