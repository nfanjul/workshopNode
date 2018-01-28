var express = require('express');
var userController = require('../controllers/userController');
var beerController = require('../controllers/beerController');

var api = express.Router();
api.get('/users', userController.users);
api.get('/beer/:id', beerController.byId);

module.exports = api;