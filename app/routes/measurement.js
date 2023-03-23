module.exports = app => {
    const measurement = require("../controllers/measurement.js");
  
    let router = require("express").Router();
      // -------------------------------------------------------------
    // Create a new measurement
    router.post("/", measurement.create);
  
    // Retrieve all measurement
    router.get("/", measurement.findAll);
  
    // Retrieve a single measurement with id
    router.get("/:id", measurement.findOne);
  
    // Update a measurement with id
    router.put("/:id", measurement.update);
  
    // Delete a measurement with id
    router.delete("/:id", measurement.delete);
  
    // Delete all measurement
    router.delete("/", measurement.deleteAll);
  
    // @todo customized routes

    app.use('/api/measurement', router);

};