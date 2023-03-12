//This Mongoose Model represents tutorials collection in MongoDB database.
// These fields will be generated automatically for each Tutorial document:
//  _id, title, description, published, createdAt, updatedAt, __v.


module.exports = (mongoose) => {

  let schema = mongoose.Schema(
    {
      frameId: Number,
      type: Number, // 1: 
      floor: Number,
      index: Number, 
      inspectionDates: Array, // array of date
      harvest: Array,
      location: Array,
      icon: {type: String, default: 'defaultFrameIcon.jpg'},
      pictures: Array, // array of pictures
      hiveId: Number,
    },
    { timestamps: true }
  );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  const model = mongoose.model("frame", schema);
  return model;
};
