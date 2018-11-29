'use strict';

const cors = require('cors');
const express = require('express');
const consign = require('consign');

const app = express();

app.set('port', 4000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

consign({ 'cwd': 'app', 'verbose': true }).include('models').then('controllers').then('routes').into(app);

module.exports = app;

