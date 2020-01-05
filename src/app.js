require('dotenv').config();

const express = require('express');
const path = require('path');
const exphb = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const morgan = require('morgan');


//Init
const app = express();
require('./database')

//setting
app.set('port', process.env.PORT || 4000);

app.set('views',path.join(__dirname,'views'));

app.engine('.hbs', exphb({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));

app.set('view engine','.hbs');


//Middleware

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'K4r4t3',
    resave: true,
    saveUninitialized: true
}));
app.use(morgan('dev'));


//routes
app.use(require('./routes'));


//Statics Files
app.use(express.static(path.join(__dirname,'public')));



module.exports = app;

