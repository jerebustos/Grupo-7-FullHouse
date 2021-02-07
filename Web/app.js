
const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './public')))
app.use(methodOverride('_method'));


const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); //Rutas Products

app.listen(3000, ()=>{
    console.log(' Servidor funcionando ');
});

app.use('/', mainRouter);
app.use('/products', productsRouter)






