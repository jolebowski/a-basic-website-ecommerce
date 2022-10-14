import "./cart-item.scss";

const CartItem = ({ cartItem: { name, quantity, imageUrl, price } }) => {
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X {price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
