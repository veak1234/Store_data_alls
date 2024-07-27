const express = require("express");
const app = express();
const fs = require('fs');

// Read items from JSON file synchronously
let items = JSON.parse(fs.readFileSync("./databases/items.json"));

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Define route to fetch items
app.get('/api/items', (req, res) => {
    res.json({ status: 200, message: "Request successful", items: items });
});
