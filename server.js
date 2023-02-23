// On utilise le module Express
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Application CRUD');
})

app.listen(3000, () => {
    console.log(`Le serveur fonctionne sur http://localhost:${PORT}`)
});