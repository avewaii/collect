const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const crypto = require('crypto');
const moment = require('moment');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "users",
    password: "12345678"
});

connection.connect();


router.post('/identifyUser', function (req, res, next) {

    connection.query('SELECT userID FROM sessions WHERE sessionID = ? ', [req.body], function (err, results) {

        console.log('userId', results);

    })
})
