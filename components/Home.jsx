import styles from "./Home.module.css";
import Carts from "./Carts";
import cartItem from "../data";
// const Home = ({ listCart }) => {
//   return (
//     <div>
//       <div><button>HOME</button><button>LOGIN</button></div>
//       <Carts listCart={listCart}></Carts>
//     </div>
//   );
// };
const Home = () => {
  const listCart = cartItem;
  return (
    <div>
      <header>
        <button className={styles.log}>LOGIN/SIGNUP</button>
      </header>
      <div className={styles.content}><Carts listCart={listCart}/></div>
      <footer>This is footer</footer>
    </div>
  );
};

export default Home;
