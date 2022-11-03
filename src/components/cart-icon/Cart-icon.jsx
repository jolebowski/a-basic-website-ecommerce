import { useDispatch, useSelector } from "react-redux";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../redux/cart/selector/cart.selector";

import { setIsCartOpen } from "../../redux/cart/actions/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
