const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));

mongoose.connect('mongodb://localhost:27017/users', (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(3000, () => {
    console.log('Escuchando puerto: ', 3000);
});