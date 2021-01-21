import { call, fork, put, takeLatest } from "redux-saga/effects";
import * as types from "./constants";
import {} from "./";
import { upload, ocr, heroku } from "./middlewares";

function* uploadSaga(action) {
  try {
    const payload = yield call(upload, action.payload);
    yield put({
      type: types.UPLOAD_IMAGE_SUCCESS,
      payload,
    });
  } catch (error) {
    yield put({
      type: types.UPLOAD_IMAGE_FAILURE,
    });
  }
}

function* ocrSaga(action) {
  try {
    const payload = yield call(ocr, action.payload);
    yield put({
      type: types.GET_TEXT_FROM_IMAGE_SUCCESS,
      payload,
    });
  } catch (error) {
    yield put({
      type: types.GET_TEXT_FROM_IMAGE_FAILURE,
    });
  }
}

function* herokuSaga(action) {
  try {
    const payload = yield call(heroku, action.payload);
    yield put({
      type: types.WAKE_UP_HEROKU_SUCCESS,
      payload,
    });
  } catch (error) {
    yield put({
      type: types.WAKE_UP_HEROKU_FAILURE,
    });
  }
}

function* watchUploadSaga() {
  yield takeLatest(types.UPLOAD_IMAGE, uploadSaga);
}

function* watchGetOcrSaga() {
  yield takeLatest(types.GET_TEXT_FROM_IMAGE, ocrSaga);
}

function* watchWakeUpHeroku() {
  yield takeLatest(types.WAKE_UP_HEROKU, herokuSaga);
}

export default function* rootSaga() {
  yield fork(watchGetOcrSaga);
  yield fork(watchUploadSaga);
  yield fork(watchWakeUpHeroku);
}
