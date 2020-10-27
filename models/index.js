const mongoose = require("mongoose");
const products = require("./product");

// שליחה לDB מקומי
// function connectToDb() {
//   return mongoose.connect("mongodb://localhost/a", {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   });
// }

// שליחה לDB אטלס
function connectToDb() {
  return mongoose.connect("mongodb+srv://dbshop:GKSiW8g4jXqkxKt@cluster0.zq2sn.mongodb.net/dbshop?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}

const models = { products };

module.exports = { connectToDb, models };
