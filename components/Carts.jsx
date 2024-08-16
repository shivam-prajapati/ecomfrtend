import Cart from "./Cart";
import styles from "./Carts.module.css";
// let call = 0;
const Carts = ({ listCart }) => {
  // if (call !== 0) {
  //   // console.log(call);
  //   // return <h1>fuck you</h1>;
  // }
  // ++call;
  // console.log(call);
  console.log("inside Carts", typeof listCart);
  let topMessage;
  if (listCart.length === 0) {
    topMessage = `No Products in Cart`;
  } else {
    topMessage = `Cart Elements`;
  }
  return (
    <div className={styles.carts}>
      <div className ={styles.msg}>{topMessage}</div>
      <div className={styles.parent}>
        {listCart.map(({ name, description, price, _id }) => (
          <Cart name={name} description={description} price={price} key={_id} />
        ))}
      </div>
    </div>
  );
};
export default Carts;

// const Carts = ({ listCart }) => {
//   let topMessage;
//   //here the listCart is reaching empty
//   if (listCart.length === 0) {
//     topMessage = `No Products in Cart`;
//   } else {
//     topMessage = `Cart Elements`;
//   }
//   return (
//     <Carts>
//       <h1>{topMessage}</h1>
//       {listCart.map(({ name, description, price, _id }) => (
//         <Cart name={name} description={description} price={price} key={_id} />
//       ))}
//     </Carts>
//   );
// };
// export default Carts;
