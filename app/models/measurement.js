module.exports = (mongoose) => {

  // record measurements data
  // one day for one document
  let schema = mongoose.Schema(
    {
      hiveId: Number,
      date: { type: Date, default: Date.now },
      measurements:  // array of objects
      {
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
        }
      }
      },
      { timestamps: true }
  );

  const model = mongoose.model("measurement", schema);
  return model;
};
