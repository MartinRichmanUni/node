require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 19007

const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL);
connection.connect(function(err) {
    if (err) throw err;
    console.log("Succesfully connected to PlanetScale!");
  });

app.get('/users', (req, res) => {
    connection.query("SELECT * FROM user",(err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    });
  })
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })