const express = require("express");
const userRoutes = require('./routes/user');

const app = express();

app.use('/', userRoutes);

module.exports = app;