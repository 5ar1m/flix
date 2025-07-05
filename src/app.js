const express = require("express");
const userRoutes = require('./routes/user');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(express.static('./src/public'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', userRoutes);

app.use(errorHandler);

module.exports = app;