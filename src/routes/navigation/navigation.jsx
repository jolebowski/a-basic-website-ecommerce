import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import { ReactComponent as ShopLogo } from "../../assets/dsquared2-seeklogo.com.svg";
import CartDropDown from "../../components/cart-dropdown/Cart-dropdown";
import CartIcon from "../../components/cart-icon/Cart-icon";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles";
import { selectIsCartOpen } from "../../redux/cart/selector/cart.selector.js";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <ShopLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign out
            </NavLink>
          ) : (
            <NavLink to="/signIn">Sign In</NavLink>
          )}
          <NavLink to="/signUp">Sign Up</NavLink>
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
