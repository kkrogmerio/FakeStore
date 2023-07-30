import {SagaIterator} from 'redux-saga';
import {all, fork} from 'redux-saga/effects';
import {productSaga} from './productSaga';
export default function* rootSaga(): SagaIterator {
  yield all([fork(productSaga)]);
}
