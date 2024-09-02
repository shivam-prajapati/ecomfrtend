import styles from "./Home.module.css";
import Items from "./Items";
import allItems from "../allItems";
// const Home = ({ listCart }) => {
//   return (
//     <div>
//       <div><button>HOME</button><button>LOGIN</button></div>
//       <Carts listCart={listCart}></Carts>
//     </div>
//   );
// };
const Home = () => {
  const listCart = allItems;
  return (
    <div>
      <header>
        <button className={styles.log}>
          <a href="enter">LOGIN/SIGNUP</a>
        </button>
      </header>
      <div className={styles.content}>
        <Items listCart={listCart} />
      </div>
      <footer>This is footer</footer>
    </div>
  );
};

export default Home;
