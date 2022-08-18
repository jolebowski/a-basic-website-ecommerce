import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./routes/homePage";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am navigation</h1>
        <Outlet />
      </div>
    </div>
  );
};
const Test = () => <h1>I am the best</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="test" element={<Test />} />
      </Route>
    </Routes>
  );
};
export default App;
