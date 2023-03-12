module.exports = app => {
    const frame = require("../controllers/frame.js");
  
    var router = require("express").Router();
      // -------------------------------------------------------------
    // Create a new frame
    router.post("/", frame.create);
  
    // Retrieve all Tutorials
    router.get("/", frame.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", frame.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", frame.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", frame.delete);
  
    // Delete all Tutorials
    router.delete("/", frame.deleteAll);
  
    app.use('/api/frame', router);

};