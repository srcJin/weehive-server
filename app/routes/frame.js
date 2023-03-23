module.exports = app => {
    const frame = require("../controllers/frame.js");
  
    let router = require("express").Router();
      // -------------------------------------------------------------
    // Create a new frame
    router.post("/", frame.create);
  
    // Retrieve all frame
    router.get("/", frame.findAll);
  
    // Retrieve a single frame with id
    router.get("/:id", frame.findOne);
  
    // Update a frame with id
    router.put("/:id", frame.update);
  
    // Delete a frame with id
    router.delete("/:id", frame.delete);
  
    // Delete all frames
    router.delete("/", frame.deleteAll);
  
    // @todo customized routes

    app.use('/api/frame', router);

};