const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.listen(cors({origin:"*"}));
//Start server
app.listen(PORT);

//+++++++++++++++TODO+++++++++++++++++++++++

// Example of REQUEST using QUERRY PARAMETERS
// localhost:3000/book?id=100
app.get("/book", (req, res) => {
    res.send(req.query.id);

});

/* Example of REQUEST using ROUTE PARAMETERS
localhost:3000/book/200*/

app.get("/book/:id", (req, res) => {
    res.send(req.params.id);

});
