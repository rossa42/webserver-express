const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {


    res.render('home', {
        nombre: 'Rossana'
    });
});

app.get('/about', function(req, res) {


    res.render('about');
});

app.get('/data', function(req, res) {


    res.send("Hola data");
});

app.post('/', function(req, res) {
    res.send('nombre World')
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})