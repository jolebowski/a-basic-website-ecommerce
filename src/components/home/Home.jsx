import HomeCategoryItem from "../home-category-item/Home-category-item";
import "./home.scss";

const Home = ({ catagories }) => {
  return (
    <div className="home-container">
      {catagories.map((category) => (
        <HomeCategoryItem key={category.id} catagories={category} />
      ))}
    </div>
  );
};

export default Home;
