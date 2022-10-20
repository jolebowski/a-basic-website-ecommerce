import "./home-category-item.scss";

const HomeCategoryItem = ({ catagories: { imageUrl, title } }) => {
  return (
    <div className="home-category-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="home-category-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default HomeCategoryItem;
