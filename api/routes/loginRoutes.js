'use strict';
module.exports = function(app) {
  var login = require('../controllers/loginController.js');
  var inventory = require('../controllers/inventoryListController.js');
  var supplier = require('../controllers/supplierListController');


  // todoList Routes
  app.route('/login')
    .get(login.list_all_tasks);
    //.post(login.create_a_task);


    //inventory list fetch
  app.route('/inventoryList')
  .get(inventory.list_all_inventory);

  app.route('/inventoryList/:id')
  .get(inventory.getItem);


  app.route('/inventoryList')
    .post(inventory.add);

    app.route('/inventoryList')
    .put(inventory.update);

    app.route('/suppplierList')
    .get(supplier.getsupplier);

};