const express = require("express");
const cors = require('cors');
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const PORT = 3000;
const app = express();

app.use(express.static("public"));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let data = JSON.parse(fs.readFileSync("databases/server.json"));

// Save data to file
function saveData() {
    fs.writeFileSync('databases/server.json', JSON.stringify(data));
}

// Get all server data
app.get("/get", (req, res) => {
    res.json({ status: 200, message: "Request successful", data: data });
});

// Add new server data
app.post('/add', (req, res) => {
    const server = req.body;
    server.id = uuidv4();
    data.push(server);
    saveData();
    res.json({ status: 200, message: "Server added successfully", data: server });
});

// Delete server data by ID
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const index = data.findIndex(server => server.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        saveData();
        res.json({ status: 200, message: "Server deleted successfully", data: data });
    } else {
        res.status(404).json({ status: 404, message: "Server not found" });
    }
});

// Update server data by ID
app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    const index = data.findIndex(server => server.id === id);
    if (index !== -1) {
        data[index] = { ...data[index], ...updateData, id: id };
        saveData();
        res.json({ status: 200, message: "Server updated successfully", data: data[index] });
    } else {
        res.status(404).json({ status: 404, message: "Server not found" });
    }
});

// Listen to the server
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
