import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/home/homePage";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/signIn/signIn";

const Shop = () => <h1>I'm in shop page </h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
