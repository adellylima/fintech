'use stricts';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fintech', { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

mongoose.Promise = global.Promise;

module.exports = mongoose;



