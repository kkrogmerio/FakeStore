import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest, CallEffect, PutEffect } from 'redux-saga/effects';
import { getProducts, getProductById } from '../apis/productApi';
import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFail,
  fetchProductById,
  getProductSuccess,
  getProductFail
} from '../state/cart/slice';
import { Product } from '../types/cart';

function* fetchProductsSaga(): SagaIterator {
  try {
    const products: Product[] = yield call(getProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error: any) {
    yield put(fetchProductsFail(error.message));
  }
}

function* fetchProductByIdSaga(action: ReturnType<typeof fetchProductById>): SagaIterator {
  try {
    const product: Product = yield call(getProductById, action.payload);
    yield put(getProductSuccess(product));
  } catch (error: any) {
    yield put(getProductFail(error.message));
  }
}

export function* watcherSaga(): SagaIterator {
  yield takeLatest(fetchProducts.type, fetchProductsSaga);
  yield takeLatest(fetchProductById.type, fetchProductByIdSaga);
}
