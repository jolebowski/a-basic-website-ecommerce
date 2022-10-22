import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  HomeCategoryItemContainer,
} from "./home-category-item.styles";

const HomeCategoryItem = ({ catagories: { imageUrl, title, route } }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <HomeCategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </HomeCategoryItemContainer>
  );
};

export default HomeCategoryItem;
