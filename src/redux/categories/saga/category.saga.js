import { all, call, takeLatest, put } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";

import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "../actions/category.actions";

import CATEGORIES_ACTION_TYPES from "../types/category.types";

export function* fetchCategoriesAsync() {
  try {
    // turn on effect when it's a function
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    console.log(error);
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}
export function* categoriesSaga() {
  // run all inside the brackets and only end when all is done
  // inside in array is generators functions
  yield all([call(onFetchCategories)]);
}
