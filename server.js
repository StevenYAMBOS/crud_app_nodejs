// On utilise le module Express
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

app.use(morgan('tiny'));

app.use(bodyparser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

// Charger les routeurs
app.use("/", require('./server/routes/router'))

app.listen(3000, () => {
    console.log(`Le serveur fonctionne sur http://localhost:${PORT}`)
});