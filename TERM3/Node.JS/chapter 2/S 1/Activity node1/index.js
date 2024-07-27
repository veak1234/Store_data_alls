

const express = require("express");
const app = express();

app.listen(4000, () => {
  console.log("Welcome to hell");
});

app.get("/veak", (req, res) => {
  res.send("Hello veak");
});
