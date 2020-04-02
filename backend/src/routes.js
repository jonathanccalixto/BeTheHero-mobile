const express = require('express');

const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');

const routes = express.Router();

// Ongs routes
routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

// Incidents routes
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;