var beerService = require('../services/beerService');

var byId = function (req, res) {
    var id = req.params.id;
    beerService.getById(id, res);
};

module.exports = {
    byId,
};

