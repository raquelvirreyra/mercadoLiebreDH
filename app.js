const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'views')));

app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port));
