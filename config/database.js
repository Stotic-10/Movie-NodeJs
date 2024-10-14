const mongoose = require("mongoose")

const database = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/Movie-rj"
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = database;
