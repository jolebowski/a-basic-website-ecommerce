import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/cart/actions/cart.action";
import { selectCartItems } from "../../redux/cart/selector/cart.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import "./product-card.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </div>
  );
};
export default ProductCard;
