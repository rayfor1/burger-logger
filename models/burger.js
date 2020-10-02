const orm = require("../config/orm");

const burger = {
    // callback function to INSERT entry 
    create: function (columns, values, cb) {
        orm.insertOne("burgers", columns, values, function (res) {
            cb(res);
        })
    },

    // callback function to UPDATE entry:
    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        })
    },
    select: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    }
};

module.exports = burger;