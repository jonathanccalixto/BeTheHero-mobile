const express = require('express');

const IncidentsController = require('./controllers/IncidentsController');
const OngsController = require('./controllers/OngsController');
const ProfilesController = require('./controllers/ProfilesController');
const SessionsController = require('./controllers/SessionsController');

const routes = express.Router();

// Incidents routes
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

// Ongs routes
routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

// Profiles routes
routes.get('/profiles', ProfilesController.index);

// Sessions routes
routes.post('/sessions', SessionsController.create);

module.exports = routes;