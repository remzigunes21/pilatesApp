import {takeLatest, call, put, select, delay, take} from 'redux-saga/effects';
import * as Api from './Api.js';
import * as actionTypes from '../actionTypes';

const actionData = function (type, payload) {
  return {type, payload};
};

//Start - Contracts
export const getContractsSaga = function* (action) {
  try {
    const {data} = yield call(Api.getContracts, action.payload);
    yield put(actionData(actionTypes.GET_CONTRACTS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: 'Hata!',
        description:
          typeof error === 'string' ? error : 'Bir şeyler yanlış gitti',
        type: 'danger',
      }),
    );
  }
};
export const getContractsCountSaga = function* (action) {
  try {
    const {data} = yield call(Api.getContractsCount);
    yield put(actionData(actionTypes.GET_CONTRACTS_COUNT, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: 'Hata!',
        description:
          typeof error === 'string' ? error : 'Bir şeyler yanlış gitti',
        type: 'danger',
      }),
    );
  }
};

export const searchContractsSaga = function* (action) {
  try {
    const {data} = yield call(Api.searchContracts, action.payload);
    yield put(actionData(actionTypes.SEARCH_CONTRACTS, data));
  } catch (error) {
    yield put(
      actionData(actionTypes.SHOW_COMMON_ALERT, {
        message: 'Hata!',
        description:
          typeof error === 'string' ? error : 'Bir şeyler yanlış gitti',
        type: 'danger',
      }),
    );
  }
};

//End - Contracts

export default function* () {
  //demo
  //Contracts
  yield takeLatest(actionTypes.GET_CONTRACTS_REQUEST, getContractsSaga);
  yield takeLatest(
    actionTypes.GET_CONTRACTS_COUNT_REQUEST,
    getContractsCountSaga,
  );
  yield takeLatest(actionTypes.SEARCH_CONTRACTS_REQUEST, searchContractsSaga);
}
