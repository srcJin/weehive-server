module.exports = app => {
    const hive = require("../controllers/hive.js");
  
    let router = require("express").Router();
    // @note hive CRUD
    // Create a new hive
    router.post("/", hive.create);
  
    // Retrieve all Hives
    router.get("/", hive.findAll);
  
    // Retrieve a single Hives with id
    router.get("/:id", hive.findOne);
  
    // Update a Hives with id
    router.put("/:id", hive.update);
  
    // Delete a Hives with id
    router.delete("/:id", hive.delete);
  
    // Delete all Hives
    router.delete("/", hive.deleteAll);
  
    // @todo customized routes

    app.use('/api/hive', router);

};