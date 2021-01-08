const express = require('express');
const router = express.Router();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "auth",
  password: "12345678"
});

connection.connect();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resourceaaa');

  console.log(err);
  console.log('respond with a resourceaaa');
});


//прослушка GET-запросов по адресу localhost3000/api/users/login
router.get('/login', function (req, res, next) {
  res.send('get cool');
})

//прослушка POST-запросов по адресу localhost3000/api/users/login
router.post('/login', function (req, res, next) {
  res.send('post cool');
})

module.exports = router;
