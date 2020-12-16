const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','pug');

//Archivo rutas
app.use(require('./routes/routes'))

app.listen(5001,()=>{
    console.log('Server on port 5001');
});
