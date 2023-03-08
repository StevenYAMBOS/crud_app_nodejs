const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    // Rendre un fichier HTML
    res.render('index.ejs');
});

route.get('/add-user', (req, res) => {
    // Rendre un fichier HTML
    res.render('add_user');
});
route.get('/update-user', (req, res) => {
    // Rendre un fichier HTML
    res.render('update_user');
});

module.exports = route