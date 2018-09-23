'use strict';


var mongoose = require('mongoose'),
  supplier = mongoose.model('supplier');

  exports.getsupplier = function(req, res) {
    supplier.find({}, function(err, task) {
      if (err)
        res.send(err);      
      else
          res.send(task);    
    });
  };