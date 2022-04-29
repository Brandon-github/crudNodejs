import connection from '../config/connection';

const model = {};

let query = '';

model.validationUser = (data, callback) => {
    query = `SELECT * FROM users 
                WHERE name_user = ? AND password_user = ?`;

    connection.query(query, data, callback);
}

model.addUser = (data, callback) => {
    query = `INSERT INTO users(name_user, email_user, password_user)
                VALUES(?, ?, ?)`;

    connection.query(query, data, callback);
}

export default model;