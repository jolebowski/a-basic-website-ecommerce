import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "../categories/saga/category.saga";
import { userSagas } from "../user/saga/user.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
