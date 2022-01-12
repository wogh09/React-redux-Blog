import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authsaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
});
export function* rootSaga() {
  yield all([authsaga(), userSaga(), writeSaga()]);
}

export default rootReducer;
