//This Mongoose Model represents tutorials collection in MongoDB database.
// These fields will be generated automatically for each Tutorial document:
//  _id, title, description, published, createdAt, updatedAt, __v.

// just a demonstration of what the module will looks like
const exampleModule = {
  title: "Js Tut#",
  description: "Description for Tut#",
  published: true,
  createdAt: "2020-02-02T02:59:31.198Z",
  updatedAt: "2020-02-02T02:59:31.198Z",
  id: "5e363b135036a835ac1a7da8",
};

module.exports = (mongoose) => {

  let schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
    },
    { timestamps: true }
  );

  // a function to map _id to id for frontend use
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const model = mongoose.model("tutorial", schema);
  return model;
};
