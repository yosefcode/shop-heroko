import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import Product from "./components/product/pruduct";
import Manage from "./components/manage/manage";
import Search from "./components/search/search";
import Kesher from "./components/kesher/kesher";
import Crud from "./components/crud/crud";
// import Chat from "./components/chat/chat";
// import Chatseler from "./components/chat/chatseler";
// import Chatclient from "./components/chat/chatclient";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Description from "./components/description/description";
import Cart from "./components/cart/cart";
// import Cartmongo from "./components/cart mongo/cart";
import cartimg from "./components/cart/cart.jpg";
import socketIOClient from "socket.io-client";
import Cookies from "js-cookie";

const App = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0);
  const [cartproduct, setCartproduct] = useState([]);
  const [cartmongo, setCartmongo] = useState([]);

  const socket = socketIOClient(process.env.REACT_APP_URLSOCKET);

  const getproducts = () => {
    axios.get(process.env.REACT_APP_URL).then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    getproducts();

    socket.on("SearchProduct", (data) => {
      if (data.length > 0) {
        axios.get(process.env.REACT_APP_URL).then((res) => {
          setProducts(data);
        });
      } else {
        getproducts();
      }
    });

    socket.on("AddProduct", () => {
      getproducts();
    });

    socket.on("DeleteProduct", () => {
      getproducts();
    });

    socket.on("ChangeProduct", () => {
      getproducts();
    });
  }, []);

  const addCart = () => {
    return setCart(cart + 1);
  };
  const removeCart = () => {
    setCart(cart - 1);
  };
  const reset = (product) => {
    products.find((prod1) => (prod1.quantity = product.quantity));
  };
  Cookies.set("foo", "bar");

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/manage/">
            <Crud />
          </Route>

          <Route exact path="/">
            <div className="App" dir="rtl">
              <div className="barright">
                <Manage products={products} />
                <Kesher />
              </div>

              <div className="cart">
                <div className="numcartall">
                  <img className="imgcart" src={cartimg} alt="sory" />
                  <div className="numcart">{cart}</div>
                </div>
                <br />

                {cartproduct.map((productcart) => (
                  <Cart
                    key={productcart.id}
                    id={productcart.id}
                    quantity={productcart.quantity}
                    title={productcart.title}
                    image={productcart.image}
                    price={productcart.price}
                    itemscart={productcart.itemscart}
                    addCart={addCart}
                    removeCart={removeCart}
                    plusCart={() => productcart.itemscart++}
                    minusCart={() => productcart.itemscart--}
                    onRemove={() =>
                      setCartproduct(
                        cartproduct.filter(
                          (listpro) => productcart.key !== listpro.key
                        )
                      )
                    }
                  />
                ))}
                <div>{/* <Chat /> */}</div>
              </div>
              {/* <div className="cartmongo">
            <div className="numcartall">
            <img className="imgcart" src={cartimg} alt="sory" />
            <div className="numcart">{cart}</div>
            </div>
            <br />
            
            {cartmongo.map((productcart) => (
              <Cartmongo
              key={productcart.id}
              id={productcart.id}
              quantity={productcart.quantity}
                title={productcart.title}
                image={productcart.image}
                price={productcart.price}
                itemscart={productcart.itemscart}
                addCart={addCart}
                removeCart={removeCart}
                plusCart={() => productcart.itemscart++}
                minusCart={() => productcart.itemscart--}
                reset={reset}
                onRemove={() =>
                  setCartproduct(
                    cartproduct.filter(
                      (listpro) => productcart.key !== listpro.key
                      )
                      )
                    }
                    />
                    ))}
                  </div> */}

              <Header />
              <Search products={products} />
              <div className="productall">
                {products.map((product) => (
                  <Product
                    key={product._id}
                    id={product._id}
                    quantity={product.quantity}
                    title={product.title}
                    image={product.image}
                    items={product.items}
                    price={product.price}
                    pluspro={() => {
                      product.items++;
                    }}
                    minuspro={() => {
                      product.items--;
                    }}
                    addCart={addCart}
                    removeCart={removeCart}
                    reset={reset}
                    addcartproduct={() => {
                      const listcart = cartproduct.find(
                        (prod) => prod.id === product._id
                      );
                      if (!listcart) {
                        setCartproduct([
                          ...cartproduct,
                          {
                            key: product._id,
                            id: product._id,
                            title: product.title,
                            image: product.image,
                            price: product.price,
                            items: product.items,
                            itemscart: 1,
                          },
                        ]);
                      } else {
                        listcart.itemscart++;
                        listcart.price += product.price;
                      }
                    }}
                    addcartmongo={() => {
                      // const listcartmongo = cartproduct.find(
                      //   (prod) => prod.id === product._id
                      // );
                      // if (product.items === 0) {
                      setCartmongo([
                        ...cartmongo,
                        {
                          key: product._id,
                          id: product._id,
                          title: product.title,
                          image: product.image,
                          price: product.price,
                          items: product.items,
                          itemscart: 1,
                        },
                      ]);
                      // } else {
                      //   listcartmongo.itemscart++;
                      //   listcartmongo.price += product.price;
                      // }
                    }}
                    removecartproduct={() => {
                      const listcart = cartproduct.find(
                        (prod) => prod.id === product._id
                      );
                      listcart.itemscart--;
                      listcart.price -= product.price;
                    }}
                  />
                ))}
              </div>
            </div>
          </Route>

          {/* <Route exact path="/:id">
        <Description />
      </Route> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
