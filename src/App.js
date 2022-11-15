import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Checkout from "./routes/checkout/checkout";
import HomePage from "./routes/home/homePage";
import Navigation from "./routes/navigation/navigation";
import Shop from "./routes/shop/shop";
import SignIn from "./routes/signIn/signIn";
import SignUp from "./routes/signUp/signUp";
import { checkUserSession } from "./redux/user/actions/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;
