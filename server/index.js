const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "12345678",
  database: "employees",
});

app.get("/getEmployees", (req, res) => {
  db.query("SELECT * FROM employees"),
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    };
});

app.listen(3001, () => {
  console.log("Server is running on 3001");
});
