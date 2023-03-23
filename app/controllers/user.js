// 控制器：从模型中获取请求的数据，创建一个 HTML 页面显示出数据，
// 并将页面返回给用户，以便在浏览器中查看。
/*
Mongoose Model functions
create a new User: object.save()
find a User by id: findById(id)
retrieve all User: find()
update a User by id: findByIdAndUpdate(id, data)
remove a User: findByIdAndRemove(id)
remove all User: deleteMany()
find all User by title: find({ title: { $regex: new RegExp(title), $options: “i” } })
*/

const db = require("../models");
const User = db.user;

// Create and Save a new User
exports.create = (req, res) => {
  console.log('controllers/users.js create(req, res) req=', req)
  // Validate request
  if (!req.body.userName) {
    res.status(400).send({ message: "no userName" });
    console.log('controller/user.js  res.status(400).send({ message: "no userName" })');
    return;
  }

  // Create a User
  const user = new User({
    userId: req.body.userId,
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
    adminType: req.body.adminType,  //1:user、 2:collaborator
    icon: req.body.icon,
    aboutMe: req.body.aboutMe,
  });
  console.log("user=",user)
  // Save User in the database
  user
    .save(user)
    .then(data => {
      res.send(data);
      console.log('controller/user.js create res.send(data) data= ',data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    const userName = req.query.userName;
  // test if the username match the requirement
  let condition = userName ? { userName: { $regex: new RegExp(userName), $options: "i" } } : {};

  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single user with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update User with id=${id}. Maybe User was not found!`
            });
          } else res.send({ message: "User was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating User with id=" + id
          });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} All users were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
};

// Find all
exports.findAllType = (req, res) => {
  User.find({ adminType: 1 })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving user data."
    });
  });
};