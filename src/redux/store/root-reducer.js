import { combineReducers } from "redux";

import { userReducer } from "../user/reducers/user.reducer";
import { categoriesReducer } from "../categories/reducers/category.reducers";
import { cartReducer } from "../cart/reducers/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
