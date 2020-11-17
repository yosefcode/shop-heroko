const express = require("express");
const app = express();
const { connectToDb, models } = require("./models");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

const socketIo = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socketIo(server);

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

const PORT = process.env.PORT || 7000;
const URL = process.env.URL;

connectToDb().then(async () => {
  server.listen(PORT, () => {
    console.log("Server is running port ", PORT);
  });
});

// io.on("connection", (socket) => {
//   console.log("New client connected");
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//     // clearInterval(interval);
//   });
// });

let userCount = 0;

io.on("connection", (socket) => {
  userCount++;

  const username = `Guest ${userCount}`;

  socket.emit("SET_USERNAME", username);
  io.sockets.emit("CREATE_MESSAGE", {
    content: `${username} connected`,
  });

  socket.on("SEND_MESSAGE", (messageObject) => {
    io.sockets.emit("CREATE_MESSAGE", messageObject);
  });

  socket.on("disconnected", () => {
    io.sockets.emit("CREATE_MESSAGE", {
      content: `${username} disconnected`,
    });
  });
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

app.get(URL, async (req, res) => {
  const products = await models.products.find();

  const search = req.query.search;

  try {
    if (search) {
      const productsSearch = await models.products.find({
        title: { $regex: search, $options: "i" },
      });
      res.send(productsSearch);
      io.emit("SearchProduct", productsSearch);
    } else {
      res.status(200).send(products);
      console.log("get");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post(URL, async (req, res) => {
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
    io.emit("AddProduct");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete(`${URL}:id`, async (req, res) => {
  try {
    const deleteproduct = await models.products.findByIdAndDelete(
      req.params.id
    );
    res.status(200).send(console.log("delete"));
    io.emit("DeleteProduct");
    if (!deleteproduct) res.status(404).send("No item found");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put(`${URL}:id`, async (req, res) => {
  const productId = req.params.id;

  let updateValues = { $set: {} };

  if (req.body.image) updateValues.$set["image"] = req.body.image;
  if (req.body.title) updateValues.$set["title"] = req.body.title;
  if (req.body.price) updateValues.$set["price"] = +req.body.price;
  if (req.body.quantity) updateValues.$set["quantity"] = +req.body.quantity;

  try {
    await models.products.findByIdAndUpdate(
      productId,
      updateValues
      // {
      //   image: req.body.image,
      //   title: req.body.title,
      //   quantity: +req.body.quantity,
      //   price: +req.body.price,
      //   item: 0,
      // }

      // { new: true }
    );
    res.status(200).send(console.log("change"));
    io.emit("ChangeProduct");
  } catch (err) {
    res.status(500).send(err);
  }
});

// app.get("/api/search/", async (req, res) => {
//   console.log("QUERY:", req.query.search);
//   const  search  = req.query.search;
//   const productsSearch = await models.products.find(
//     { title: { $regex: search, $options: "i" } },
//     function (err, docs) {
//       console.log("Search");
//       console.log(docs);
//     }
//   );
//   try {
//     res.send(productsSearch);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.get("/api/products/", async (req, res) => {
//   const products = await models.products.find();
//   console.log("get");
//   try {
//     res.send(products);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });
