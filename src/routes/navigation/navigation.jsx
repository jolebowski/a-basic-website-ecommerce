import { Outlet, Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>Logo</div>
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/test">
            Test
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
