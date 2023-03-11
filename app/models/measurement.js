module.exports = (mongoose) => {

  // record measurements data
  // one day for one document
  let schema = mongoose.Schema(
    {
      hiveId: Number,
      date: { type: Date, default: Date.now },
      measurements:  // array of objects
      {
        time: "00:30",
        value: {
          timestamp: ISODate("2019-01-31T10:00:00.000Z"),
          temperature_1: 40,
          temperature_2: 40,
          humidity: 50,
          lighting: 50,
          in: 100,
          out: 100,
          sound: 100,
        }
      }
      },
      { timestamps: true }
  );

  const model = mongoose.model("measurement", schema);
  return model;
};
