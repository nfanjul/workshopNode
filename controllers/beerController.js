var beerService = require('../services/beerService');

var byId = function (req, res) {
    var id = req.params.id;
    beerService.getById(id, res);
};

var all = function (req, res) {
    beerService.getAll(res);
};

// Create Object
var mapper = function (req) {
    return {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        beerType_Id: req.body.beerType_Id,
    }
}

var create = function (req, res) {
    beerService.create(mapper(req), res);
}

var update = function (req, res) {
    var id = req.params.id;
    beerService.update(id, mapper(req), res);
}

var remove = function (req, res) {
    var id = req.params.id;
    beerService.remove(id, res);
};

module.exports = {
    all,
    byId,
    create,
    update,
    remove
};

