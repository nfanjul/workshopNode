var express = require('express');
var userController = require('../controllers/userController');
var beerController = require('../controllers/beerController');

var api = express.Router();
api.get('/users', userController.users);
api.get('/beers', beerController.all);
api.get('/beer/:id', beerController.byId);
api.post('/beer', beerController.create);
api.put('/beer/:id', beerController.update);
api.delete('/beer/:id', beerController.remove)

module.exports = api;