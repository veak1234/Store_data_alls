const express = require("express");
const app = express();
const cors = require("cors");
const fs = require('fs');
const { join } = require("path");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:"*"}));
app.use(express.static("public"));
app.use(express.json());

function save(){
    fs.writeFileSync("./databases/items.json", JSON.stringify(items));
}

// Read items from JSON file synchronously
let items = JSON.parse(fs.readFileSync("./databases/items.json"));

// Define route to fetch items
app.get('/items', (req, res) => {
    res.json({ status: 200, message: "Request successful", items: items });
});

// Define route to create items
app.post("/api/create", (req, res) => {
    let newItem = req.body;
    newItem.id = uuidv4();
    items.push(newItem);
    fs.writeFileSync("./databases/items.json", JSON.stringify(items));
    res.json({ status: 200, message: "Item created", newItem: newItem });
});

// Define route to delete item by ID
app.delete('/api/delete/:id', (req, res) => {
    let id = req.params.id;
    if (items.length > id) {
        items.splice(id, 1);
        save(); // Save
        res.json({ status: 200, message: "Item deleted successfully" });
    } else {
        res.json({ status: 404, message: "Item not found" });
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
