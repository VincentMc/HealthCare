const path = require('path');
const express = require('express');
var favicon = require('serve-favicon');
//this statement is required to use static files

const app = express();
const port = 3000;
//this tells the app to use files in the public folder
app.use(favicon(__dirname + '/public/images/icon.ico')); 
app.use(express.static('public'));
app.use('/', require('./routes/routes'));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(function(req, res, next) {
    next(createError(404));
  });

module.exports = app;