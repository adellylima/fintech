'use strict'

// Estância do express
const app = require('./config/app');

app.listen(app.get('port'), function () {
  console.log('Server is running on Port:', app.get('port'));
});