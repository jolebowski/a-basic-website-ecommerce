import Category from "../catergory/Category";
import "./home.scss";

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
