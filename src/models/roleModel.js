import connection from '../config/connection';

const model = {};

let query = '';

model.getRoles = (callback) => {
    query = 'SELECT * FROM roles';
    connection.query(query, callback);
}

export default model;