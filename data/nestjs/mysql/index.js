const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'admin', // Replace with your MySQL password
    database: 'mydb'
});



app.get('/api/products', async (req, res, next) => {
    try {
        const query = `SELECT * FROM PRODUCTS`;
        db.query(query, (err, results) => {
            res.json({ results });
         })

    } catch (err) {
        next(err)
    }
});

app.listen(port, console.log('Listening...'));
