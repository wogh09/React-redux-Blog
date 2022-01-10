import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authsaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
});
export function* rootSaga() {
  yield all([authsaga(), userSaga()]);
}

export default rootReducer;
