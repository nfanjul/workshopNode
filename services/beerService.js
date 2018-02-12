var sql = require('mssql');
var config = require('../config');

var getAll = function (res) {
    sql.connect(config, function (err) {
        if (err) res.status(500).send(err);
        var request = new sql.Request();
        request.query('SELECT * FROM beers', function (err, recordset) {
            if (err || recordset === undefined) res.status(404).send(err);
            var result = recordset;
            sql.close();
            res.status(200).send(result.recordsets);
        });
    });
}

var getById = function (id, res) {
    sql.connect(config, function (err) {
        if (err) res.status(500).send(err);
        var request = new sql.Request();
        request.input('input_parameter', sql.UniqueIdentifier, id)
            .query('SELECT * FROM beers where id = @input_parameter', function (err, recordset) {
                if (err || recordset === undefined)  res.status(404).send(err);
                var result = recordset;
                sql.close();
                res.status(200).send(result.recordsets);
            });
    });
}

var create = function (beer, res) {
    sql.connect(config, function (err) {
        if (err) res.status(500).send(err);
        var request = new sql.Request();
        request.input('id', sql.UniqueIdentifier, beer.id)
            .input('name', sql.NVarChar, beer.name)
            .input('description', sql.NVarChar, beer.description)
            .input('beerType_Id', sql.NVarChar, beer.beerType_Id)
            .query('insert into beers (id, name, description, beerType_Id) values (@id, @name, @description, @beerType_Id)', function (err, result) {
                if (err || result === undefined) res.status(404).send(err);
                sql.close();
                res.status(200).send(result.rowsAffected);
            });
    });
}

var update = function (id, beer, res) {
    sql.connect(config, function (err) {
        if (err) res.status(500).send(err);
        var request = new sql.Request();
        request.input('id', sql.UniqueIdentifier, id)
            .input('name', sql.NVarChar, beer.name)
            .input('description', sql.NVarChar, beer.description)
            .input('beerType_Id', sql.NVarChar, beer.beerType_Id)
            .query('update beers set name=@name, description=@description, beerType_Id=@beerType_Id where id=@id', function (err, result) {
                if (err || result === undefined) res.status(404).send(err);
                sql.close();
                res.status(200).send(result.rowsAffected);
            });
    });
}

var remove = function (id, res) {
    sql.connect(config, function (err) {
        if (err) res.status(500).send(err);
        var request = new sql.Request();
        request.input('input_parameter', sql.UniqueIdentifier, id)
            .query('delete FROM beers where id = @input_parameter', function (err, result) {
                if (err || result === undefined) res.status(404).send(err);
                sql.close();
                res.status(200).send(result.rowsAffected);
            });
    });
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};