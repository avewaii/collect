const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const crypto = require('crypto');
const moment = require('moment');
const utils = require('../utils')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "users",
    password: "12345678"
});

connection.connect();

router.get('/collections', utils.authRequired, function (req, res, next) {
    connection.query('SELECT * FROM collections', function (err, result) {
        res.send({...result})

        console.log(err);
        //console.log(result); // собственно данные
    });
})



router.post('/collections', function (req, res, next) {



    let data = [req.body.id, req.body.name, req.body.description];

    connection.query('INSERT INTO collections (id, name, description) VALUES(?, ?, ?) ', data, function (err, results, fields) {
        !err ? res.json(results) : res.json(err);
    })
})


router.post('/deleteCollection', function (req, res, next) {

    let collectionId = Object.keys(req.body);

    connection.query('DELETE FROM collections WHERE id IN (?) ', collectionId, function (err, results, fields) {
        !err ? res.json(results) : res.json(err);
    })

})

module.exports = router;