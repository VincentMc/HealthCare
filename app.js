const path = require('path');
const express = require('express');
//this statement is required to use static files

const app = express();
const port = 3000;
//this tells the app to use files in the public folder
app.use(express.static('public'));
app.use('/', require('./routes/routes'));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));