const express = require('express');
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use(express.json());

let data = JSON.parse(fs.readFileSync("database/posts.json"));

function save() {
    fs.writeFileSync('database/posts.json', JSON.stringify(data));
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/', (req, res) => {
   res.json({status: 200, message: "Aoi is working... ", endpoint: "/api/posts.." })
})
/**
 * Description: CRUD posts
 * Endpoint: /api/posts
*/

// Get posts
app.get('/api/posts', (req, res) => {
    res.json({message: "get all posts ", data: data});
    
});

// Get post
app.get('/api/posts/:id', (req, res) => {
    res.json({message: "get a post ",data: data});
});

// Create a new post
app.post('/api/posts', (req, res) => {
    let items = req.body;
    items.id = uuidv4();
    data.push(items);
    save();
    res.json({ status: 200, message: "posts add successfully", data: items });
});

// Delete post
app.delete('/api/posts/:id', (req, res) => {
    let id = req.params.id;
    if (data.length > id) {
        data.splice(id, 1);
        save();
        res.json({ status: 200, message: "Server deleted successfully", data: data });
    } else {
        res.status(404).json({ status: 404, message: "Server not found" });
    }
})

// Update a post
app.put('/api/posts/:id', (req, res) => {
    let id = req.params.id;
    let nameData = req.body
    let name = {'title': nameData, "description": nameData}
    if (data.length>id) {
        data[id] = {...name};
        save();
        res.json({ status: 200, message: "Server updated successfully" });
    } else {
        res.status(404).json({ status: 404, message: "Server not found" });
    }
});