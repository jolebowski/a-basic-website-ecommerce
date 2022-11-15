import { CartItemContainer, ItemsDetails } from "./cart-item.styles";

const CartItem = ({ cartItem: { name, quantity, imageUrl, price } }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <ItemsDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X {price}
        </span>
      </ItemsDetails>
    </CartItemContainer>
  );
};
export default CartItem;
