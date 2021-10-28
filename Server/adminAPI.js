// Admin API module for Capstone Project
// Nate Arkin and Garret Poole
// Written October 2021

const sql = require('mysql2/promise');
const secrets = require('./secrets');
const auth = require('./authAPI');

async function getClientData(req) {
    if ((await auth.authenticate(req)).success) {
        console.log(`Sucessful admin authentication of user ${req.body.username}.`);

    } else {
        console.log(`Unsucessful admin authentication for user ${req.body.username}.`)
    }
}