import { useContext } from "react";

import { Outlet, Link } from "react-router-dom";
import { ReactComponent as ShopLogo } from "../../assets/dsquared2-seeklogo.com.svg";
import "./navigation.scss";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          <Link className="nav-link" to="/SignUp">
            Sign Up
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
