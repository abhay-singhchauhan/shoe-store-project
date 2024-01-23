import "./App.css";
import { Fragment, useState } from "react";
import Add from "./components/addingItem/adding";
import Head from "./components/UI/Head";
import Showing from "./components/addingItem/showing";
import Provider from "./state/contextProvier";
import Modal from "./components/UI/Modal";

function App() {
  const [cartValues, setCartValues] = useState([]);
  const [showCart, setShowCart] = useState(true);
  const context = {
    items: cartValues,
    totalAmount: cartValues.reduce(
      (accu, current) =>
        accu + (+current.s + +current.m + +current.l) * +current.price,
      0
    ),
    addItem: (item, sml) => {
      let obj = {};
      let isPresent = false;
      const allCart = cartValues.filter((ele) => {
        if (ele.id !== item.id) {
          return true;
        } else {
          isPresent = true;
          obj = { ...ele };
          obj[sml] = +ele[sml] + 1;
        }
      });
      if (isPresent) {
        allCart.push(obj);
        setCartValues(allCart);
      } else {
        allCart.push(item);
        setCartValues(allCart);
      }
    },
  };
  const dataz = [
    {
      id: 1,
      name: "Shoes1",
      description: "Its the best shoe ever",
      price: 1000,
      s: 10,
      m: 20,
      l: 30,
    },
    {
      id: 2,
      name: "Shoes4",
      description: "Thik Thak Shoe",
      price: 20000,
      s: 107,
      m: 20,
      l: 40,
    },
  ];
  const [productData, setProductData] = useState(dataz);
  function OnClickFunction(data) {
    data.id = productData.length + 1;
    setProductData([...productData, data]);
  }
  function addCartClick(id, sml) {
    let haveMore = false;
    let filterCart = productData.map((ele) => {
      if (ele.id === id.id && ele[sml] >= 1) {
        haveMore = true;
        ele[sml] = +ele[sml] - 1;
        return ele;
      } else {
        return ele;
      }
    });

    setProductData(filterCart);

    if (haveMore) {
      let cartPresent = false;
      let filterRealCart = cartValues.map((ele) => {
        if (ele.id === id.id) {
          cartPresent = true;
          ele[sml] = +ele[sml] + 1;
        }
        return ele;
      });

      if (!cartPresent) {
        let obj = { ...id };
        obj.s = 0;
        obj.m = 0;
        obj.l = 0;
        obj[sml] = 1;
        filterRealCart.push(obj);
      }
      setCartValues(filterRealCart);
    }
    console.log(productData);
    console.log(cartValues);
  }
  function togleShowModal() {
    setShowCart(!showCart);
  }

  return (
    <Provider.Provider value={context}>
      <Head onClose={togleShowModal}></Head>
      <Add OnClickFunction={OnClickFunction}></Add>
      <Showing onCartClick={addCartClick} data={productData}></Showing>
      {showCart && (
        <Modal onClose={togleShowModal}>
          {cartValues.map((ele) => (
            <div id="modalDiv">
              <h4>{ele.name}</h4>
              <div>
                <p>Small x {ele.s}</p>
                <p>Medium x {ele.m}</p>
                <p>Large x {ele.l}</p>
              </div>
              <h5>$ {(+ele.s + +ele.m + +ele.l) * +ele.price}</h5>
            </div>
          ))}
          <div id="totalDiv">
            <h3>Total :- {context.totalAmount}</h3>
            <div>
              <button onClick={togleShowModal}>Close</button>
              <button>Buy</button>
            </div>
          </div>
        </Modal>
      )}
    </Provider.Provider>
  );
}

export default App;
