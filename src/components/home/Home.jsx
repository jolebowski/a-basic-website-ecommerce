import Category from "../catergory/Category";
import "./home.scss";

/**
 * Component to show home page
 *
 * ```jsx
 * <Home>
 *  categories
 * </Home>
 *```
 * */

const Home = ({ catagories }) => {
  return (
    <div className="home-container">
      {catagories.map((cat) => (
        <Category key={cat.id} catagories={cat} />
      ))}
    </div>
  );
};

export default Home;
