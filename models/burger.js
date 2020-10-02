const orm = require("../config/orm");

const burger = {
    // callback function to CREATE entry 
    create: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        })
    },
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