'use strict';

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const homeRoutes = require('./routes');

app.disable('x-powered-by');
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', homeRoutes);


app.listen(port);