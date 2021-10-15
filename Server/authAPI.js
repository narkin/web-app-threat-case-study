const sql = require('mysql2/promise');
const secrets = require('./secrets');

async function authenticate(req) {
    const connection = await sql.createConnection(secrets.mysql_login);
    const [sqlData] = await connection.execute(`SELECT * from user_table where username like '${req.body.username}' and pword like '${req.body.password}';`);
    if (sqlData.length === 0) {
        return {success: false, err: 'Username or password is incorrect'};
    } else {
        return {success: true, userData: sqlData};
    }
}

module.exports = { authenticate }