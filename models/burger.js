// require config
var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(response){
            cb(response);
        });

    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, cb);
    },

    updateOne: function(condition, cb) {
        orm.updateOne('burgers', {devoured: true}, condition, cb);
    }
};

module.exports = burger;
