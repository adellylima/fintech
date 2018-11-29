'use strict'

module.exports = (app) => {
    
    let client = app.controllers.clientController;

    app.get('/client', client.list);
    app.post('/client', client.post);
    app.get('/client/:id', client.get);
    app.put('/client/:id', client.update);
    app.delete('/client/:id', client.delete);
}