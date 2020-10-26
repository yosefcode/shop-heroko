const fs = require("fs");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  fs.readFile("products.json", (err, data) => {
    const products = JSON.parse(data);

    res.send(products);
  });
});

// push arry
app.post("/", (req, res) => {
  fs.readFile("products.json", (err, data) => {
    const products = JSON.parse(data);
    const title = req.body.title;
    const quantity = req.body.quantity;
    const image = req.body.image;
    const price = req.body.price;
    products.push({
      id: products.length + 1,
      image: image,
      title: title,
      quantity: quantity,
      price: price,
      items: 0,
    });
    fs.writeFile("products.json", JSON.stringify(products), (err) => {
      res.send(products);
    });
  });
});
// const { id } = useParams();

// delete
app.delete("/:id", (req, res) => {
  fs.readFile("products.json", (err, data) => {
    const products = JSON.parse(data);
    const productId = +req.params.id;
    const productIndex = products.findIndex(
      (product) => product.id === productId
    );
    products.splice(productIndex, 1);
    fs.writeFile("products.json", JSON.stringify(products), (err) => {
      res.send("delete");
    });
  });
});

// change title
app.put("/:id", (req, res) => {
  fs.readFile("products.json", (err, data) => {
    const products = JSON.parse(data);
    const todoId = +req.params.id;
    const todoIndex = products.findIndex((todo) => todo.id === todoId);
    products[todoIndex].title = req.body.title;
    fs.writeFile("products.json", JSON.stringify(products), (err) => {
      res.send("YOU SUCCEED!!!");
    });
  });
});

// search
app.get("/search/", (req, res) => {
  console.log("QUERY:", req.query.search);
  // const search = req.query.search;
  const { search } = req.query;
  fs.readFile("products.json", (err, data) => {
    const products = JSON.parse(data);
    // if (search) {
    const filteredProduct = products.filter((product) =>
      product.title.includes(search)
    );
    res.send(filteredProduct);
    // } else {
    //   res.send(products);
    // }
  });
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
