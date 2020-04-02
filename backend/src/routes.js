const express = require('express');

const IncidentsController = require('./controllers/IncidentsController');
const OngsController = require('./controllers/OngsController');

const routes = express.Router();

// Incidents routes
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

// Ongs routes
routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

module.exports = routes;