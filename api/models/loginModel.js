'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  UserName: {
    type: String,
    required: 'Kindly enter the name of the task'
  },  
  Password: {
    type: String,
    required: 'Kindly enter the password'
  }
});

module.exports = mongoose.model('Login', TaskSchema);


var inventorySchema = new Schema({
    productname: {
      type: String,
      required: 'Kindly enter the name of the Product Name'
    },  
    suppliername: {
      type: String,
      required: 'Kindly enter the Supplier Name'
    },  
    quantity: {
      type: Number,
      required: 'Kindly enter the Quantity'
    },  
    unitprice: {
      type: Number,
      required: 'Kindly enter the Unit Price'
    },
    totalcost: {
      type: Number,
      required: 'Kindly enter the Unit Price'
    }
  });
  
  module.exports = mongoose.model('inventorylist', inventorySchema);

  
var supplierSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  }
});

module.exports = mongoose.model('supplier', supplierSchema);