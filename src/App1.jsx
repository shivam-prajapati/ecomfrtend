import { useState, useEffect } from "react";
import Cart from "../components/Cart";
import bearer from "../variables";
import cartItem from "../data";
import "./App.css";
import Carts from "../components/Carts";
// console.log(bearer)
// let cnt =0;
function App() {
  const [list, setList] = useState(cartItem);
  // const list = cartItem;
  const [isLoaded, setIsLoaded] = useState(false);
  // const isLoaded = true;
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
  console.log("list ",list);
  // console.log(cnt)
  // ++cnt;
  return (
    // {console.log(list)}
    // <div>Hello</div>
    <div className="carts">
      {isLoaded ? <Carts listCart={list} /> : <h2>Loading...</h2>}
    </div>
  );
}

export default App;
