const Cart = ({ name, description, price }) => {
  return (
    <div
      style={{
        height: "200px",
        width: "300px",
        display: "block",
        border: "solid 2px gray",
        borderRadius: "15px",
        position: "relative",
        backgroundColor: "white",
      }}
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <div
        style={{
          display: "inline-block",
          width: "60px",
          height: "25px",
          position: "absolute",
          bottom: "2px",
          right: "8px",
        }}
      >
        {price} INR
      </div>
    </div>
  );
};

export default Cart;
