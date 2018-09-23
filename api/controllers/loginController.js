'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Login');

exports.list_all_tasks = function(req, res) {
  Task.findOne({}, function(err, task) {
    if (err)
      res.send(err);
      else{
        if(req.query.Username=="Nirzar" && task.Password=="admin")
        {
            res.send({
                Username:req.query.Username,
                Password:task.Password,
                Result:true
            });
        }
        else{
            res.send({Result:false});
        }
      }    
  });
};




exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
