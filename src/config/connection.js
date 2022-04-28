import mysql from 'mysql';

const connectionConfigValues = {
    host: 'localhost',
    user: 'root',
    password: 'bama1591',
    database: 'app',
    port: 3306
};

const connection = mysql.createConnection(connectionConfigValues);

connection.connect((err) => {
    if (!err) {
        console.log("Connected Successfully to the database");
    } else {
        console.error(err);
    }
});

export default connection;