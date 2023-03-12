//This Mongoose Model represents tutorials collection in MongoDB database.
// These fields will be generated automatically for each Tutorial document:
//  _id, title, description, published, createdAt, updatedAt, __v.


module.exports = (mongoose) => {

  let schema = mongoose.Schema(
    {
      userId: Number,
      username: String,
      password: String,
      adminType: Number,  //1:user、 2:collaborator
      aboutMe: String,
      icon: String,
      hiveId: Number
    },
    { timestamps: true }
  );
                    
  // a function to map _id to id for frontend use
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    // use both _id and id
    object._id = _id;
    object.userId = _id;
    return object;
  });
    
  const model = mongoose.model("user", schema);
  return model;
};
