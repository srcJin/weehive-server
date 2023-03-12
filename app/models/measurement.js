module.exports = (mongoose) => {
  // record measurements data
  // one day for one document
  let schema = mongoose.Schema(
    {
      hiveId: Number,
      date: { type: Date, default: Date.now },
      // array of objects
      measurements: {
        time: Date,
        value: {
          timestamp: Date,
          temperature_1: Number,
          temperature_2: Number,
          humidity: Number,
          lighting: Number,
          in: Number,
          out: Number,
          sound: Number,
        },
      },
    },
    { timestamps: true }
  );

  // a function to map _id to id for frontend use
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    // use both _id and id
    object._id = _id;
    object.measurementId = _id;
    return object;
  });

  const model = mongoose.model("measurement", schema);
  return model;
};
