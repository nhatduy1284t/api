const express = require('express');
const route = require('./src/routes');
const db = require('./src/config/db/index');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
require('dotenv').config();

//Middlewares
app.use(cors());

//Body parser for POST request
app.use(express.json());
app.use(express.urlencoded());
//Serving static files
const path = require('path')
app.use(express.static(path.join(__dirname, 'src/public')));
//Connect DB
db.connect();
//Routes
route(app);

app.listen(process.env.PORT || 3000);
console.log(process.env.test);

