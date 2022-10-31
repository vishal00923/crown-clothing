import { all, call } from 'redux-saga/effects';
import { userSaga } from './user/userSaga';
import { categoriesSaga } from './categories/categoriesSaga';

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}
