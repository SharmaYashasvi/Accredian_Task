const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: "biv4mwwlxo8walabwhyi-mysql.services.clever-cloud.com", 
    user: "ulqaqakdnlo8zxvu", 
    password: "jXvsI2ONJc4yumbyrzT2",
    database: "biv4mwwlxo8walabwhyi",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if(err) console.log(err)
    console.log("Connected successfully")
})

module.exports = pool;