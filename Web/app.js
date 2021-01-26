
const express = require('express');
const app = express();
const path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log(' Servidor funcionando ');
});

app.get('/', (req,res)=>{
       res.render("index");
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/producto', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});