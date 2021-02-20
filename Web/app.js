
const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session')
const cookieParser = require('cookie-parser')

app.set('port', process.env.PORT || 3000);

app.listen( app.get("port") , ()=> console.log(' Servidor funcionando '));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './public')))

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(methodOverride('_method'));

app.use(session({
    secret: 'fulanito',
    resave: false,
    saveUninitialized: true
}))

app.use(cookieParser())

const mainRouter = require('./routes/main'); // Rutas Main
const productsRouter = require('./routes/products'); //Rutas Products
const userRouter = require('./routes/users'); //Rutas Users

app.use('/', mainRouter);
app.use('/producto', productsRouter)
app.use('/usuario', userRouter)






