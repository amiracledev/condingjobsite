const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');

const app = express();

//Test DB
db.authenticate()
  .then(() => console.log('database connected...'))
  .catch(err => console.log('error: ' + err));

app.get('/', (req, res) => res.send('INDEX123'));

//Gig Routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
