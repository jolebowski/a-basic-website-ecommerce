import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "../categories/saga/category.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
