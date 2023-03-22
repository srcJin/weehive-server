const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./User.js")(mongoose);
db.hive = require("./Hive.js")(mongoose);
db.frame = require("./Frame.js")(mongoose);
db.measurement = require("./Measurement.js")(mongoose);

module.exports = db;
