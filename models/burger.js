// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
      orm.selectAll("burger", function(res) {
        callback(res);
      });
    },
    // The variables cols and values are arrays.
    create: function(cols, values, callback) {
      console.log("cols", cols);
      console.log("values", values);
      orm.create("burger", cols, values, function(res) {
        callback(res);
        });
    },
    update: function(objColValues, condition, callback) {
      orm.update("burger", objColValues, condition, function(res) {
        callback(res);
      });
    },
    delete: function(condition, callback) {
      orm.delete("burger", condition, function(res) {
        callback(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_Controller.js).
  module.exports = burger
  