import { combineReducers } from "redux";

import { userReducer } from "../user/reducers/user.reducer";
import { categoriesReducer } from "../categories/reducer/category.reducer";
import { cartReducer } from "../cart/reducer/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
