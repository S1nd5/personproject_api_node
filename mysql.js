require('dotenv').config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    database : process.env.MYSQL_DATABASE,
    password : process.env.MYSQL_PASSWORD,
})

connection.connect((err) => {
    if ( err ) throw err;
    console.log("[MySQL] Connected!");
});

module.exports = connection;