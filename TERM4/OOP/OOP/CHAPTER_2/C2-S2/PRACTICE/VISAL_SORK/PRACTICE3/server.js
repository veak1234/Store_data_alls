const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;
app.listen(PORT);
app.use(express.static("public"));

// YOUR CODE HERE
const cors = require("cors");
app.use(cors({origin:"*"}));
IP = "172.16.1.75";

let allProducts = JSON.parse(fs.readFileSync("./products.json"));

// Get product name by id 
app.get("/product_name/:id", (req, res)=>{
    let productName = null;
    allProducts.forEach(product => {
        if(req.params.id == product.id){
            productName = product.name;
        }
    });
    res.status(200).send(
        result = {
            name: productName,
        }
    );
})

// Get product brand by id 
app.get("/product_brand/:id", (req, res)=>{
    let productBrand = null;
    allProducts.forEach(product => {
        if(req.params.id == product.id){
            productBrand= product.brand; 
        }
    });
    res.status(200).send(
        result = {
            brand: productBrand,
        }
    );
})



