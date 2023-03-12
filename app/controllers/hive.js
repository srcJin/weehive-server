// 控制器：从模型中获取请求的数据，创建一个 HTML 页面显示出数据，
// 并将页面返回给用户，以便在浏览器中查看。
/*
Mongoose Model functions
create a new Hive: object.save()
find a Hive by id: findById(id)
retrieve all Hive: find()
update a Hive by id: findByIdAndUpdate(id, data)
remove a Hive: findByIdAndRemove(id)
remove all Hive: deleteMany()
find all Hive by title: find({ title: { $regex: new RegExp(title), $options: “i” } })
*/

const db = require("../models");
const Hive = db.hive;


// Create and Save a new Hive
exports.create = (req, res) => {
  // Validate request
  if (!req.body.hiveId) {
    res.status(400).send({ message: "no hiveID" });
    return;
  }

  // Create a Hive
  const hive = new Hive({
    hiveId: req.body.hiveId,
    hiveName: req.body.hivename,
    icon: req.body.icon,
    userId: req.body.userId,
    inspectionDates: req.body.inspectionDates, // array of date
    location: req.body.location,
    queenName: req.body.queenName,
    queenId: req.body.queenId,
    frames: req.body.frames // array of framd ids
  });

  // Save Hive in the database
  hive
    .save(hive)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Hive."
      });
    });
};

// Retrieve all hives from the database.
exports.findAll = (req, res) => {
    const hivename = req.query.hivename;
  var condition = hivename ? { hivename: { $regex: new RegExp(hivename), $options: "i" } } : {};

  Hive.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving hives."
      });
    });
};

// Find a single hive with an id
exports.findOne = (req, res) => {
    const id = req.params.hiveId;

  Hive.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Hive with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Hive with id=" + id });
    });
};

// Update a Hive by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.hiveId;
    
      Hive.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Hive with id=${id}. Maybe Hive was not found!`
            });
          } else res.send({ message: "Hive was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Hive with id=" + id
          });
        });
};

// Delete a Hive with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.hiveId;

  Hive.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Hive with id=${id}. Maybe Hive was not found!`
        });
      } else {
        res.send({
          message: "Hive was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Hive with id=" + id
      });
    });
};

// Delete all Hives from the database.
exports.deleteAll = (req, res) => {
    Hive.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} All hives were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all hives."
      });
    });
};

