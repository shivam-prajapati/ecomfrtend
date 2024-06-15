import { useState, useEffect } from "react";
import Cart from "../components/Cart";
import bearer from "../variables";
import cartItem from "../data";

// console.log(bearer)
function App() {
  const [list, setList] = useState(cartItem);
  const [isLoaded, setIsLoaded] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:5001/cart/", {
  //     method: "GET",
  //     headers: {
  //       bearer: bearer,
  //       Accept: "*/*",
  //       "Sec-Fetch-Mode": "cors",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setList(json);
  //       setIsLoaded(true);
  //       console.log(json);
  //     })
  //     .catch((error) => console.error("errolundr", error));
  // }, []);
  return (
    <div id="root1">
      <h2>Cart Items</h2>
      <div
        style={{
          width: "1200px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          position: "relative",
          gap: "10px",
        }}
      >
        {isLoaded ? (
          list.map(({ name, description, price, _id }) => (
            <Cart
              name={name}
              description={description}
              price={price}
              key={_id}
            />
          ))
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
    </div>
    // <Cart name="{list.name}" description="{list.description}" price="{list.price}"></Cart>
  );
}

export default App;
