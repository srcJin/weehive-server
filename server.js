// step 1. require modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create an Express app
const app = express();



//
// step 2. add middlewares
//

// cors provides Express middleware to enable CORS with letious options.
// related to error: :8080/#/tutorials:1 
// Access to XMLHttpRequest at 'http://localhost:3333/api/tutorials' from origin 'http://localhost:8080' 
// has been blocked by CORS policy: 
// The 'Access-Control-Allow-Origin' header has a value 
// 'http://localhost:8081' that is not equal to the supplied origin.
// @note here is to ifx corsOptions
let corsOptions = {
  origin: false 
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//
// step 3. connect to mongo db using mongoose
//

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


//
// step 4. define routes
//

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to WeeHive Server." });
});

// Mount routes
require("./app/routes/routes")(app);
require("./app/routes/user")(app);
require("./app/routes/hive")(app);
require("./app/routes/frame")(app);
require("./app/routes/measurement")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


