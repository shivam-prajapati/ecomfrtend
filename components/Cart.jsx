import styles from "./Cart.module.css";
const Cart = ({ name, description, price }) => {
  return (
    <div className={styles.cart}>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className={styles.price}>{price} INR</div>
    </div>
  );
};
export default Cart;
