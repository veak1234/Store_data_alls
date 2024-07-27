const express = require('express');
const app = express();
const port = 3000;
app.listen(port);
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'));

// /**
//  * Items
//  */
app.listen(port,()=>{
    console.log("Hello world", port)
})
