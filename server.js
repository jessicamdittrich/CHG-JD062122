// IMPORT EXPRESS DEPENDANCY
const express = require('express');

// IMPORT MYSQL
const mysql = require('mysql2');

// SETTING UP PORT VARIABLE
const PORT = process.env.PORT || 3001;

// INITIALIZE EXPRESS
const app = express();

// SETTING UP EXPRESS APPLICATION TO HANDLE DATA PARSING
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CONNECT TO MYSQL DATABASE
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'abcd1234!!',
    database: 'business_db'
  },
  console.log(`Connected to the business_db database.`)
);

// QUERY DATABASE
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// DEFAULT RESPONSE FOR ANY OTHER REQUEST (NOT FOUND)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
