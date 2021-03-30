
const express = require('express');
const createError = require('http-errors');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const userLoggedMiddleware = require('./middleware/userLogMiddleware')

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
}));



app.use(cookieParser())

app.use(userLoggedMiddleware)

const mainRouter = require('./routes/main'); // Rutas Main
const productsRouter = require('./routes/products'); //Rutas Products
const userRouter = require('./routes/users'); //Rutas Users

app.use('/', mainRouter);
app.use('/producto', productsRouter)
app.use('/usuario', userRouter)



// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




