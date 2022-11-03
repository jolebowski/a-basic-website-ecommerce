import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../redux/categories/actions/category.actions";
import "./shop.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};
export default Shop;
