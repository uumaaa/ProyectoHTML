const express = require('express');
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const tasksRoutes = require('./routes/tasks');
const myconnection = require('express-myconnection');
const multer = require('multer');
const hbs = require('handlebars');
const app = express();
app.set('port', 3000);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(app.get('port'), ()=>{
    console.log(`Escuchando en el puerto ${app.get('port')}`);
});

hbs.registerHelper('ifCond', function (v1, operator, v2, options) {
  switch (operator) {
    case '===':
      return v1 === v2 ? options.fn(this) : options.inverse(this);
    case '!==':
      return v1 !== v2 ? options.fn(this) : options.inverse(this);
    case '<':
      return v1 < v2 ? options.fn(this) : options.inverse(this);
    case '<=':
      return v1 <= v2 ? options.fn(this) : options.inverse(this);
    case '>':
      return v1 > v2 ? options.fn(this) : options.inverse(this);
    case '>=':
      return v1 >= v2 ? options.fn(this) : options.inverse(this);
    default:
      return options.inverse(this);
  }
});

app.use(myconnection(mysql,{
    host:'localhost',
    user: 'root',
    password: 'admin',
    port: 3306,
    database: 'crud_db'
}, 'single'));


app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname+'/views');
app.engine('.hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', '.hbs');


app.use('/', tasksRoutes);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public/uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "foto") {
      cb(null, true);
    } else {
      cb(new Error("Invalid field name"), false);
    }
  },
}).single("foto");


app.get('/', (req, res)=>{
    res.render('home');
});
