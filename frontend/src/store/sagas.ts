import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchListsSuccess, fetchItemsSuccess } from './actions';
import * as api from '../network/api';

function* fetchListsSaga() {
  const response = yield call(api.getLists);
  yield put(fetchListsSuccess(response.data));
}

function* addListSaga(action: any) {
  yield call(api.createList, action.payload);
  yield call(fetchListsSaga);
}

function* fetchItemsSaga(action: any) {
  const response = yield call(api.getItems, action.payload);
  yield put(fetchItemsSuccess(response.data));
}

function* addItemSaga(action: any) {
  const { listId, name } = action.payload;
  yield call(api.createItem, listId, name);
  yield call(() => fetchItemsSaga({ payload: listId }));
}

export default function* rootSaga() {
  yield all([
    takeEvery('FETCH_LISTS_REQUEST', fetchListsSaga),
    takeEvery('ADD_LIST_REQUEST', addListSaga),
    takeEvery('FETCH_ITEMS_REQUEST', fetchItemsSaga),
    takeEvery('ADD_ITEM_REQUEST', addItemSaga),
  ]);
}
