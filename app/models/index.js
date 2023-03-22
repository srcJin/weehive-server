const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./model.js")(mongoose);
db.user = require("./user.js")(mongoose);
db.hive = require("./hive.js")(mongoose);
db.frame = require("./frame.js")(mongoose);
db.measurement = require("./measurement.js")(mongoose);

module.exports = db;
