const mysql = require('mysql2')

let connection;

function getConnection() {
    if (!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'acpt96',
            database: 'student_amad_api'
        })
    }
    return connection;
}

module.exports=getConnection();