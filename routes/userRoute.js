const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) => {
    try {
        con.query("SELECT * FROM users", (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

router.get("/:id", (id, res) => {
    try {
        con.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
            if (err) throw err;
            res.send(res);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

router.post("/", (req, res)=> {
    try {
        con.query('INSERT INTO users SET', (err, res) => {
            if (err) throw err;
            res.send(res);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

router.put("/:id", (req, users, res)=> {
    try {
        con.query(
            'UPDATE users SET full_name = ?, email = ?, password = ?, billing_address = ?, default_shipping_address = ?, country = ?, phone = ?', 
        [users.full_name, users.email, users.password, users.billing_address, users.default_shipping_address, users.country, users.phone ],
        (err, res) => {
            if (err) throw err;
            res.send(res);
        }
    )} catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

router.delete("/:id", (id, res)=> {
    try {
        con.query("DELETE FROM users WHERE id = ?", id, (err, res)=> {
            if (err) throw err;
            res.send(res);
        })
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

module.exports = router;