import { useState, useEffect } from "react";
import Cart from "../components/Cart";
import bearer from "../variables";
import cartItem from "../data";
import "./App.css";
import Carts from "../components/Carts";
// console.log(bearer)
// let cnt =0;
function App() {
  const list = [
    {
      name: "Digital Camera",
      description:
        "A digital camera with a 24MP sensor and 4K video recording capabilities.",
      _id: 9,
      price: 600,
    },
  ];
  return (
    <div className="carts">
      <Carts listCart={list} />
    </div>
  );
}

export default App;
