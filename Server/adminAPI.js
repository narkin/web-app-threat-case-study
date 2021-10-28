// Admin API module for Capstone Project
// Nate Arkin and Garret Poole
// Written October 2021

const sql = require('mysql2/promise');
const secrets = require('./secrets');
const auth = require('./authAPI');

async function getClientData(req) {
    var authenticationResult = await auth.authenticate(req);
    if (authenticationResult.success && authenticationResult.userData[0].role === 'Admin') {
        console.log(`Sucessful admin authentication of user ${req.body.username}.`);
        const connection = await sql.createConnection(secrets.mysql_login);
        const [sqlData] = await connection.execute(`SELECT * FROM company_clients;`);
        return {success: true, clientData: sqlData};
    } else {
        console.log(`Unsucessful admin authentication for user ${req.body.username}.`)
        return {success: false};
    }
}

module.exports = { getClientData }