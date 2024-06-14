import { useState, useEffect } from "react";
import Cart from "../components/Cart";
import bearer from "../variables";
import "./App.css";

// console.log(bearer)
function App() {
  let [list, setList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5001/cart/", {
      method: "GET",
      headers: {
        bearer: bearer,
        Accept: "*/*",
        "Sec-Fetch-Mode": "cors",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setList(json);
        setIsLoaded(true);
        console.log(json);
      })
      .catch((error) => console.error("errolundr", error));
  }, []);
  // list = {
  //   _id: "666ae5c1dfa4274927b0fa40",
  //   mail: "cart@mail.com",
  //   itemId: "666a8c9e2cf159e0b6b91c92",
  //   name: "Headphones",
  //   description:
  //     "Noise-cancelling over-ear headphones with superior sound quality.",
  //   price: 250,
  //   __v: 0,
  // };
  return (
    <div
      style={{
        width: "900px",
        display: "flex",
        flexDirection: "row",
        flexWrap:"wrap",
        position: "relative",
        gap:"10px"
      }}
    >
      {isLoaded ? (
        list.map(({ name, description, price ,_id}) => <Cart name={name} description={description} price={price} key={_id} />
        )
      ) : (
        <div>nothing to display</div>
      )}
      {/* {isLoaded ? (
        <Cart
          name={list.name}
          description={list.description}
          price={list.price}
        />
      ) : (
        <div>nothing to display</div>
      )} */}
    </div>
    // <Cart name="{list.name}" description="{list.description}" price="{list.price}"></Cart>
  );
}

export default App;
