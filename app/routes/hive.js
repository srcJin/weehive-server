module.exports = app => {
    const hive = require("../controllers/hive.js");
  
    var router = require("express").Router();
      // -------------------------------------------------------------
    // Create a new hive
    router.post("/", hive.create);
  
    // Retrieve all Tutorials
    router.get("/", hive.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", hive.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", hive.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", hive.delete);
  
    // Delete all Tutorials
    router.delete("/", hive.deleteAll);
  
    app.use('/api/hive', router);

};