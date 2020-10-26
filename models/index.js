const mongoose = require("mongoose");
const products = require("./product");

function connectToDb() {
  return mongoose.connect("mongodb://localhost/a", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}

const models = { products };

module.exports = { connectToDb, models };
