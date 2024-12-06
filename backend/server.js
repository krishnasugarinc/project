// backend/server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pg_website',
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Fetch PGs
app.get('/api/pgs', (req, res) => {
  const query = 'SELECT * FROM pgs';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
