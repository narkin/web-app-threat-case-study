// Web Server for Capstone Essay
// Nate Arkin and Garret Poole
// Written October 2021

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const serverPort = 5002;
const path = require('path');
require('console-stamp')(console);

app.use(express.static(path.join(__dirname+'/../Client/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/../README.md'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname+'/../Client/Login_Page.html'));
})

app.listen(serverPort, () => {
    console.info(`Web server is running on port ${serverPort}`);
})