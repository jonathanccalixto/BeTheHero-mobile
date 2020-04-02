const express = require('express');

const OngsController = require('./controllers/OngsController');

const routes = express.Router();

// Ongs routes
routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

module.exports = routes;