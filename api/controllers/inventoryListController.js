'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('inventorylist');

exports.list_all_inventory = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);      
    else
        res.send(task);    
  });
};

exports.add=function(req,res){
    Task.findOne({productname:req.body.productname},function(err,task){
        if (err)
        res.send(err);      
      else
      {
        if(task!=null && task.length>0)
        {
            res.send({message:'duplicate'});
        }
        else{

            let newInventory=new Task();
            newInventory.productname=req.body.productname;
            newInventory.suppliername=req.body.suppliername;
            newInventory.quantity=req.body.quantity;
            newInventory.unitprice=req.body.unitprice; 
            newInventory.totalcost=req.body.totalcost;
                
            Task.create(req.body,function(err1,newInventory){
                if(err1)
                    res.send(err1);
                else
                {
                                      
                    res.send({message:'created',inventory:newInventory});
                }                    
            });
        }
      }
          
    });
};


exports.update=function(req,res){
    Task.findById(req.body._id,function(err,task){
        if (err)
        res.send(err);      
      else
      {
        if(task.length==0)
        {
            res.send({message:'notFound'});
        }
        else{                                    
            task.suppliername=req.body.suppliername;
            task.quantity=req.body.quantity;
            task.unitprice=req.body.unitprice; 
            task.totalcost=req.body.totalcost;  
            task.save(req.body,function(err1,task1){
                if(err1)
                    res.send(err1);
                else
                {                                          
                    res.send({message:'updated',inventory:task1});
                }                    
            });
        }
      }
          
    });
};

exports.getItem=function(req,res){
    Task.findById(req.params.id,function(err,task){
        if (err)
            res.send(err);      
        else 
            res.send(task);          
    });
};