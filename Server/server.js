// Web Server for Capstone Essay
// Nate Arkin and Garret Poole
// Written October 2021

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const serverPort = 5002;
const path = require('path');
const auth = require('./authAPI');
const admin = require('./adminAPI');
const stringStore = require('./stringStore');
const fs = require('fs');

require('console-stamp')(console);

app.use(express.static(path.join(__dirname+'/../Client/')));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/../README.md'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname+'/../Client/Login_Page.html'));
})

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname + '/../Client/adminPage.html'));
})

// login endpoint
app.post('/api/login', (req, res) => {
    auth.authenticate(req).then(output => res.send(output));
})

// adminData endpoint
app.post('/api/admin/getClients', (req, res) => {
    admin.getClientData(req).then(output => res.send(output));
})

app.get('/XSS-StringStore', (req, res) => {
    // res.sendFile(path.join(__dirname + '/../Client/stringStore.html'));

    var page = fs.readFileSync(__dirname + '/../Client/stringStore.html');

    var replacement = stringStore.retrieveString();

    page = page.toString().replace('<!-- StoredString Location -->', replacement);
    res.send(page);
})

// stringStore Store New String
app.post('/api/string/store', (req, res) => {
    stringStore.storeNewString(req.body.stringToStore)
    res.send(stringStore.retrieveString());
})

// stringStore Get Stored String
app.get('/api/string/get', (req, res) => {
    res.send(stringStore.retrieveString());
})


app.listen(serverPort, () => {
    console.info(`Web server is running on port ${serverPort}`);
})