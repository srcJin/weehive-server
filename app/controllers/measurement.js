// 控制器：从模型中获取请求的数据，创建一个 HTML 页面显示出数据，
// 并将页面返回给用户，以便在浏览器中查看。
/*
Mongoose Model functions
create a new Measurement: object.save()
find a Measurement by id: findById(id)
retrieve all Measurement: find()
update a Measurement by id: findByIdAndUpdate(id, data)
remove a Measurement: findByIdAndRemove(id)
remove all Measurement: deleteMany()
find all Measurement by title: find({ title: { $regex: new RegExp(title), $options: “i” } })
*/

const db = require("../models");
const Measurement = db.measurement;

// Create and Save a new Measurement
exports.create = (req, res) => {
  // Validate request
  if (!req.body.hiveId) {
    res.status(400).send({ message: "no hiveId" });
    return;
  }

  // Create a Measurement
  const measurement = new Measurement({
    hiveId: req.body.hiveId,
    date: req.body.date,
    measurements: {
      time: req.body.time,
      value: {
        timestamp: req.body.timestamp,
        temperature_1: req.body.temperature_1,
        temperature_2: req.body.temperature_2,
        humidity: req.body.humidity,
        lighting: req.body.lighting,
        in: req.body.in,
        out: req.body.out,
        sound: req.body.sound,
      },
    },
  });

  // Save Measurement in the database
  measurement
    .save(measurement)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Measurement.",
      });
    });
};

// Retrieve all measurements from the database.
exports.findAll = (req, res) => {
  const measurementname = req.query.measurementname;
  let condition = measurementname
    ? {
        measurementname: { $regex: new RegExp(measurementname), $options: "i" },
      }
    : {};

  Measurement.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving measurements.",
      });
    });
};

// Find a single measurement with an id
exports.findOne = (req, res) => {
  const id = req.params.measurementId;

  Measurement.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not found Measurement with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Measurement with id=" + id });
    });
};

// Update a Measurement by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.measurementId;

  Measurement.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Measurement with id=${id}. Maybe Measurement was not found!`,
        });
      } else res.send({ message: "Measurement was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Measurement with id=" + id,
      });
    });
};

// Delete a Measurement with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.measurementId;

  Measurement.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Measurement with id=${id}. Maybe Measurement was not found!`,
        });
      } else {
        res.send({
          message: "Measurement was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Measurement with id=" + id,
      });
    });
};

// Delete all Measurements from the database.
exports.deleteAll = (req, res) => {
  Measurement.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} All measurements were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all measurements.",
      });
    });
};

// Find all
exports.findAllType = (req, res) => {
  Measurement.find({ type: 1 })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Measurement data."
    });
  });
};