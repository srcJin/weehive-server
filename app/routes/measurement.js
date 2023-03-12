module.exports = app => {
    const measurement = require("../controllers/measurement.js");
  
    var router = require("express").Router();
      // -------------------------------------------------------------
    // Create a new measurement
    router.post("/", measurement.create);
  
    // Retrieve all Tutorials
    router.get("/", measurement.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", measurement.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", measurement.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", measurement.delete);
  
    // Delete all Tutorials
    router.delete("/", measurement.deleteAll);
  
    app.use('/api/measurement', router);

};