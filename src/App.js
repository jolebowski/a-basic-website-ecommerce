import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/home/homePage";
import Navigation from "./routes/navigation/navigation";

const Shop = () => <h1>I am the best</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};
export default App;
