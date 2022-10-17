import { useContext } from "react";

import { Outlet, Link } from "react-router-dom";
import { ReactComponent as ShopLogo } from "../../assets/dsquared2-seeklogo.com.svg";
import CartDropDown from "../../components/cart-dropdown/Cart-dropdown";
import CartIcon from "../../components/cart-icon/Cart-icon";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <ShopLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="/signIn">
              Sign In
            </Link>
          )}
          <Link className="nav-link" to="/signUp">
            Sign Up
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
