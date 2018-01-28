var sql = require('mssql');
var config = require('../config');

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

module.exports = {
    getById,
};