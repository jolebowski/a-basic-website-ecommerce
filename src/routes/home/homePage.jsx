import { Outlet } from "react-router-dom";
import Home from "../../components/home/Home";

const HomePage = () => {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
};

export default HomePage;
