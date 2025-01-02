const express = require('express');
const morgan = require('morgan');
const app = express();
const productRouter = require('./api/vi/routes/product');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const secure=require('./api/vi/middleware/secure');
app.use(secure);

app.use('/product' , productRouter);

module.exports = app;