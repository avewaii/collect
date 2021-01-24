const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const crypto = require('crypto');
const moment = require('moment');
// const utils = require('../utils');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "users",
    password: "12345678"
});

connection.connect();

//прослушка POST-запросов по адресу localhost3000/api/users/login
router.post('/register', function (req, res, next) {

    let passwordHash = crypto.createHash('sha256').update(req.body.password).digest('hex');

    let data = [req.body.email, passwordHash, moment().format('YYYY-MM-DD HH:mm:ss'), req.body.status];

    connection.query('SELECT id FROM users WHERE email = ?', [req.body.email], function (err, results) {

        console.log(results)

        if (err || results.length) {
            res.status(401).send("User has already registered");
            return
        }

        connection.query('INSERT INTO users(email, password, last_login, blocked) VALUES(?, ?, ?, ?) ', data, function (err, results, fields) {
            !err ? res.send("Success") : res.json(err);
        })

    })
})

router.get('/deleteUser', function (req, res, next) {
    connection.query('SELECT * FROM users', function (err, result) {
        res.send({...result});

        console.log(err);
        console.log(result);
    });
})

router.post('/deleteUser', function (req, res, next) {

    let UsersId = req.body;

    connection.query('DELETE FROM users WHERE id IN (?) ', [UsersId], function (err, results, fields) {
        !err ? res.json(results) : res.json(err);
    })
})

module.exports = router;