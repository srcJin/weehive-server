// 控制器：从模型中获取请求的数据，创建一个 HTML 页面显示出数据，
// 并将页面返回给用户，以便在浏览器中查看。
/*
Mongoose Model functions
create a new Frame: object.save()
find a Frame by id: findById(id)
retrieve all Frame: find()
update a Frame by id: findByIdAndUpdate(id, data)
remove a Frame: findByIdAndRemove(id)
remove all Frame: deleteMany()
find all Frame by title: find({ title: { $regex: new RegExp(title), $options: “i” } })
*/

const db = require("../models");
const Frame = db.frame;


// Create and Save a new Frame
exports.create = (req, res) => {
  // Validate request
  if (!req.body.frameName) {
    res.status(400).send({ message: "no frameName" });
    return;
  }

  // Create a Frame
  const frame = new Frame({
    frameId: req.body.frameId,
    type: req.body.type, // 1: 
    floor: req.body.floor,
    index: req.body.index,
    inspection: req.body.inspection, // array of date
    harvest: req.body.harvest,
    location: req.body.location,
    icon: req.body.icon,
    pictures: req.body.pictures, // array of pictures
    hiveId: req.body.hiveId,
  });

  // Save Frame in the database
  frame
    .save(frame)
    .then(data => {
      console.log("frame.js create res.send(data) data = ", data)
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Frame."
      });
    });
};

// Retrieve all frames from the database.
exports.findAll = (req, res) => {
  const framename = req.query.framename;
  let condition = framename ? { framename: { $regex: new RegExp(framename), $options: "i" } } : {};

  Frame.find(condition)
    .then(data => {
      res.send(data);
      console.log("frame.js findAll data = ", data)

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving frames."
      });
    });
};

// Find a single frame with an id
exports.findOne = (req, res) => {
  const id = req.params.frameId;

  Frame.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Frame with id " + id });
      else 
      {
        console.log("frame.js findOne data = ", data)
        res.send(data);
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Frame with id=" + id });
    });
};

// Update a Frame by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.frameId;

  Frame.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Frame with id=${id}. Maybe Frame was not found!`
        });
      } else {
        console.log('Frame.findByIdAndUpdate() id = ', id)
        console.log('Frame.findByIdAndUpdate() req.body = ', req.body)
        res.send({ message: "Frame was updated successfully." });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Frame with id=" + id
      });
    });
};

// Delete a Frame with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.frameId;

  Frame.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Frame with id=${id}. Maybe Frame was not found!`
        });
      } else {
        res.send({
          message: "Frame was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Frame with id=" + id
      });
    });
};

// Delete all Frames from the database.
exports.deleteAll = (req, res) => {
  Frame.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} All frames were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all frames."
      });
    });
};

// Find all
exports.findAllType = (req, res) => {
  Frame.find({ date: 1 })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Frame data."
      });
    });
};