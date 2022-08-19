import { Outlet, Link } from "react-router-dom";
import { ReactComponent as ShopLogo } from "../../assets/dsquared2-seeklogo.com.svg";
import "./navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <ShopLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
