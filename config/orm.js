const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    let array = [];

    for (var i = 0; i < num; i++) {
        array.push("?");
    }
    return array.toString();
}

function objectToSql(object) {
    let array = [];

    for (var key in object) {
        var value = object[key];
        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }
    return array.toString();
}

// ORM:
var orm = {
    selectAll: (table, cb) => {
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err
            };
            cb(result);
        })
    },
    insertOne: (table, columns, values, cb) => {
        var queryString = `INSERT INTO ${table}(${columns.toString()}) VALUES (${printQuestionMarks(values.length)});`;
        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    updateOne: (table, objColVals, condition, cb) => {
        var queryString = `UPDATE ${table} SET ${objectToSql(objColVals)} WHERE ${condition};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            };
            cb(result);
        })
    }
};

module.exports = orm;