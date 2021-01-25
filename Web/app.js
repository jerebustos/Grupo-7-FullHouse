
const express = require('express');
const app = express();

app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log(__dirname + ' Servidor funcionando ');
});

app.get('/', (req,res)=>{
       res.sendFile(__dirname + '/views/index.html');
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