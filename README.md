
Methods	Urls	Actions
GET	api/tutorials	get all Tutorials
GET	api/tutorials/:id	get Tutorial by id
POST	api/tutorials	add new Tutorial
PUT	api/tutorials/:id	update Tutorial by id
DELETE	api/tutorials/:id	remove Tutorial by id
DELETE	api/tutorials	remove all Tutorials
GET	api/tutorials?title=[kw]	find all Tutorials which title contains 'kw'


– db.config.js exports configuring parameters for MongoDB connection & Mongoose.
– Express web server in server.js where we configure CORS, initialize & run Express REST APIs.
– Next, we add configuration for MongoDB database in models/index.js, create Mongoose data model in models/tutorial.model.js.
– Tutorial controller in controllers.
– Routes for handling all CRUD operations (including custom finder) in tutorial.routes.js.