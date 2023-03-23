//This Mongoose Model represents tutorials collection in MongoDB database.
// These fields will be generated automatically for each Tutorial document:
//  _id, title, description, published, createdAt, updatedAt, __v.


module.exports = (mongoose) => {

  let schema = mongoose.Schema(
    {
      hiveId: String,
      hiveName: String,
      icon: {type: String, default: 'defaultHiveIcon.jpg'},
      userId: String,
      inspection: Array, // array of date
      location: Array,
      health: String,
      queenName: String,
      queenId: Number,
      frames: Array, // array of framd ids
      measurementsIds: Array, //
      comment: String
    },
    { timestamps: true }
  );

    // a function to map _id to id for frontend use
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      // use both _id and id
      object._id = _id;
      object.hiveId = _id;
      return object;
    });
  
  const model = mongoose.model("hive", schema);
  return model;
};
