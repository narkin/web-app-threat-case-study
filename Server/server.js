// Web Server for Capstone Essay
// Nate Arkin and Garret Poole
// Written October 2021

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const serverPort = 5002;
const path = require('path');
const auth = require('./authAPI');

require('console-stamp')(console);

app.use(express.static(path.join(__dirname+'/../Client/')));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/../README.md'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname+'/../Client/Login_Page.html'));
})

///#region Auth API
app.post('/api/login', (req, res) => {
    auth.authenticate(req).then(output => res.send(output));
})

app.listen(serverPort, () => {
    console.info(`Web server is running on port ${serverPort}`);
})