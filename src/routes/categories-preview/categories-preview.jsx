import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview";
import { selectCategoriesMap } from "../../redux/categories/selector/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview title={title} key={title} products={products} />
        );
      })}
    </>
  );
};
export default CategoriesPreview;
