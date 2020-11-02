const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  image: String,
  title: String,
  quantity: Number,
  price: Number,
  items: Number,
  description: String,
});

const Products = mongoose.model("Products", ProductsSchema);

const product1 = new Products({
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTa2HMSk-fT000SkEM3QIHQ5KXDkeN8x__Q2A&usqp=CAU",
  title: "כורסא",
  quantity: 8,
  price: 1000,
  items: 0,
  description: "aaaa aaaaaaa aaaaaaa aaaaaa aaaaaaa aaaaaa"
});

const product2 = new Products({
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4waBT7uVSdq4gcU6Jhwh2nxi4Z60PbeAb_g&usqp=CAU",
  title: "חדר שינה",
  quantity: 20,
  price: 2000,
  items: 0,
});

const product3 = new Products({
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz-mUTVhQ3jPQEf5w5EKt1xwQD5s_-7sjHDQ&usqp=CAU",
  title: "סלון",
  quantity: 9,
  price: 2500,
  items: 0,
});

const product4 = new Products({
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSK3Hx_OhEbVLGz6fMo61PQorxhvPxnWsoEYQ&usqp=CAU",
  title: "פינת אוכל",
  quantity: 22,
  price: 1200,
  items: 0,
});

const product5 = new Products({
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgzHN2sSKtg3J1uXLTznecsp8kUYEe8VIo4w&usqp=CAU",
  title: "חדר ילדים",
  quantity: 6,
  price: 1500,
  items: 0,
});

const product6 = new Products({
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRH9Cm_0JutfkKWCK1MocWhtLTPDUakrqKAlg&usqp=CAU",
  title: "ארונות",
  quantity: 18,
  price: 2080,
  items: 0,
});


const product7 = new Products({
  image:
  "https://www.home-decor.co.il/wp-content/uploads/2020/01/anis-1000.jpg",
  title: "כסאות",
  quantity: 25,
  price: 300,
  items: 0,
});

const product8 = new Products({
  image:
  "https://cdn.groo.co.il/_media/media/24344/241029.jpg",
  title: "שולחן",
  quantity: 8,
  price: 650,
  items: 0,
});

const product9 = new Products({
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbn2RcsBTvZ1D1ejYfsQaBzi7O8tUJhvVeyw&usqp=CAU",
  title: "ארונית",
  quantity: 12,
  price: 1300,
  items: 0,
});
// product1.save();
// product2.save();
// product3.save();
// product4.save();
// product5.save();
// product6.save();
// product7.save();
// product8.save();
// product9.save();

module.exports = Products;
