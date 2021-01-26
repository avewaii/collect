const mysql = require("mysql");
const moment = require('moment');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "users",
    password: "12345678"
});

connection.connect()

module.exports = {
    authRequired(req, res, next) {
        let session = req.header('Authorization');
        console.log("TEST", session)
        if (!session) {
            res.status(401).send("Please, log in")
        } else {
            connection.query(`
                SELECT sessionID FROM sessions
                WHERE sessionID = ? `, session, (err, result) => {
                    if (err || !result || !result.length) {
                        res.status(401).send("Please, log in")
                    } else {
                        connection.query(`
                            UPDATE sessions
                            SET lastLogin = ?
                            WHERE sessionID = ?
                            `, [moment().format('YYYY-MM-DD HH:mm:ss'), session], (err, result) => {
                                if (!err && result) {
                                    next();
                                    return;
                                }

                                res.status(401).send("Please, log in")
                        })
                    }
                }
            )
        }
    },
    adminRequired(req, res, next) {
        let session = req.header("Authorization")
        connection.query(`
            SELECT u.id FROM sessions AS s 
            INNER JOIN users AS u 
            WHERE 
                u.id = s.userID 
            AND
                u.admin = 1
            AND 
                s.sessionID = ?
            ;`, [session], (err, result) => {

            if (!err && result.length) {
                next()
                return
            }

            res.status(403).send("Please contact administrator")

        })
    }
}