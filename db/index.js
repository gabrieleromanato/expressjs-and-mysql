'use strict';

const mysql = require('mysql');

const params = {
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'database'
};

const connection = mysql.createConnection(params);

connection.connect();

const query = queryString => {
    return new Promise((resolve, reject) => {
        connection.query(queryString, (err, results, fields) => {
            if(err) {
                reject(err);
            }
            resolve(results);
            connection.end();
        });
    });
};

module.exports = {
    query
};