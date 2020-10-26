const express = require("express");
const app = express();
const { connectToDb, models } = require("./models");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

const port = process.env.PORT || 7000;

connectToDb().then(async () => {
  app.listen(port, () => {
    console.log("Server is running...");
  });
});

app.get("/api/products/", async (req, res) => {
  const products = await models.products.find();
  console.log("get");
  try {
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/api/products/", async (req, res) => {
  const newproduct = new models.products({
    title: req.body.title,
    quantity: +req.body.quantity,
    image: req.body.image,
    price: +req.body.price,
    item: 0,
  });
  console.log("add");
  try {
    await newproduct.save();
    res.send(newproduct);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    const deleteproduct = await models.products.findByIdAndDelete(
      req.params.id
    );
    console.log(req.params.id);
    if (!deleteproduct) res.status(404).send("No item found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/products/search/", async (req, res) => {
  console.log("QUERY:", req.query.search);
  const { search } = req.query;

  const productsSearch = await models.products.find(
    { title: { $regex: search, $options: "i" } },
    function (err, docs) {
      console.log("Search");
      console.log(docs);
    }
  );
  try {
    res.send(productsSearch);
  } catch (err) {
    res.status(500).send(err);
  }
});
