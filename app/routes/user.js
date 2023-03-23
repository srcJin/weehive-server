module.exports = app => {
    const user = require("../controllers/user.js");
  
    let router = require("express").Router();
    // @note user CRUD
    // Create a new User
    router.post("/", user.create);
  
    // Retrieve all user
    router.get("/", user.findAll);
  
    // Retrieve a single user with id
    router.get("/:id", user.findOne);
  
    // Update a user with id
    router.put("/:id", user.update);
  
    // Delete a user with id
    router.delete("/:id", user.delete);
  
    // Delete all user
    router.delete("/", user.deleteAll);
  
    // @todo customized routes

    app.use('/api/user', router);

};