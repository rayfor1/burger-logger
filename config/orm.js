// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

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
                throw err;
            }

            cb(result);
        })
    },
    // values is an array of values that we want to save to columns
    // columns are the columns we want to insert the values into
    insertOne: (table, columns, values, cb) => {
        var queryString = `INSERT INTO ${table}(${columns.toString()}) VALUES (${printQuestionMarks(values.length)});`;

        console.log(queryString)
        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        })
    },
    // objColVals would be the columns and values that we want to update
    // an example of objColVals would be {name: panther, sleepy: true}
    updateOne: (table, objColVals, condition, cb) => {
        var queryString = `UPDATE ${table} SET ${objectToSql(objColVals)} WHERE ${condition};`;

        console.log(queryString)
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            
            cb(result);
        })
    },

    //create a delete function to help manage the conditions:
    deleteOne: (table, condition, cb) => {
        var queryString = `DELETE FROM ${table} WHERE ${condition};`;
        console.log(queryString)
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            
            cb(result);
        })
    }
};

module.exports = orm;