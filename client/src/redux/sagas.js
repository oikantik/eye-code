import { call, fork, put, takeLatest } from "redux-saga/effects";
import * as types from "./constants";
import {} from "./";
import { upload, ocr } from "./middlewares";

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

function* watchUploadSaga() {
  yield takeLatest(types.UPLOAD_IMAGE, uploadSaga);
}

function* watchGetOcrSaga() {
  yield takeLatest(types.GET_TEXT_FROM_IMAGE, ocrSaga);
}

export default function* rootSaga() {
  yield fork(watchGetOcrSaga);
  yield fork(watchUploadSaga);
}
