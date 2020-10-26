const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());

app.use(express.json());

function connectToDb() {
  return mongoose.connect("mongodb://localhost/aa", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}

connectToDb().then(async () => {
  const ProductsSchema = Schema({
    // _id: Schema.Types.ObjectId,
    image: String,
    title: String,
    quantity: Number,
    price: Number,
    items: Number,
    carts: { type: Schema.Types.ObjectId, ref: "Cart" },
  });
  const Prod = mongoose.model("Prod", ProductsSchema);

  const cartSchema = Schema({
    productid: { type: Schema.Types.ObjectId, ref: "Prod" },
    title: String,
    quantity: String,
    price: String,
  });

  const Cart = mongoose.model("Cart", cartSchema);

  // const product1 = new Prod({});
  // await product1.save();

  const product2 = new Prod({
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4waBT7uVSdq4gcU6Jhwh2nxi4Z60PbeAb_g&usqp=CAU",
    title: "חדר שינה",
    quantity: 12,
    price: 2000,
    items: 0,
  });
  await product2.save();

  const cart1 = new Cart({
    productid: product2._id,
    title: "Prodtitle",
    price: 10,
  });
  cart1.save();
  // await Cart.find().populate("productid").exec();

  app.get("/cart/", async (req, res) => {
    const products = await Cart.find().populate({
      path: "productid",
      select: "title",
    });
    console.log("get");
    try {
      res.send(products);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  // app.get("/cart/", async (req, res) => {
  //   const cart = await Cart.find().populate("productid");

  //   // const cart = await Cart.find();

  //   console.log("getcart");
  //   try {
  //     res.send(cart);
  //   } catch (err) {
  //     res.status(500).send(err);
  //   }
  // });

  // app.post("/cart/", async (req, res) => {
  //   const newcart = new Cart({
  //     // productid: product2._id,

  //     title: req.body.title,
  //     // price: +req.body.price,
  //     // item: +req.body.item,
  //   });
  //   await Cart.find().populate("productid").exec();
  //   console.log("add");

  //   try {
  //     await newcart.save();
  //     res.send(newcart);
  //   } catch (err) {
  //     res.status(500).send(err);
  //   }
  // });
});
app.listen(7005, () => {
  console.log("Server is running...");
});
