import { takeLatest, call, all, put } from 'redux-saga/effects';
import { CATEGORIES_ACTION_TYPES } from './categoriesTypes';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './categoriesAction';

import { getCategoriesAndDocuments } from '../../utils/firebase';

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
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
  yield all([call(onFetchCategories)]);
}
