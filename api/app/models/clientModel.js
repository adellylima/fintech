'use strict'

module.exports = (app) => {

    const mongoose = require('../../config/db');

    const Client = new mongoose.Schema({
        fullName: {
            required: true,
            type: String
        },
        age: {
            required: true,
            type: Number
        },
        cpf: {
            required: true,
            type: String
        },
        phone: {
            required: true,
            type: Number
        },
        email: {
            required: true,
            type: String
        },
        creatAt: {
            type: Date,
            default: Date.now
        }
    },
        {
            collection: 'client'
        }
    );

    return mongoose.model('Client', Client);
}