const mysql = require ("mysql");
const Promise = require ("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo ={
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "wbtexam"
}

const addUser = async(message) => {

    const connection = mysql.createConnection (dbinfo);
    await connection.connectAsync();

    let sql = `INSERT INTO message values (?)`;
    await connection.queryAsync(sql,[message.messageBody]);

    await connection.endAsync();
};

let message={
    messageBody:"Hello World",
};

//addUser(message);
const selectUser = async() => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `SELECT * from message`;
    const list = await connection.queryAsync(sql);
    await connection.endAsync();
    console.log(list);
};
selectUser();

module.exports = {selectUser,addUser};