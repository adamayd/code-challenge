const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cors = require('cors');

const app = express();
const port = 5555;
const apiUrl = 'https://next.json-generator.com/api/json/get/EkzBIUWNL';

app.use(bodyParser.json());
app.use(cors());

// GetMany
app.get("/api/getmany", (req, res) => {
    console.log("GET Many");
    apiCall(apiUrl)
        .then(response => res.json(response))
        .catch(error => res.status(500).send(error));
});

// GetSingle
app.get("/api/getsingle/:id", (req, res) => {
    console.log(`GET Single ${req.params.id}`);
    apiCall(apiUrl)
        .then(response => res.json(response[req.params.id]))
        .catch(error => res.status(500).send(error));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// API function
const apiCall = (url) => {
    return new Promise((resolve, reject) => {
        request(url, {json: true}, (err, res, body) => {
            if (err) reject(err)
            resolve(body)
        });
    });
};