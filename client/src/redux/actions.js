import * as types from "./constants";

export const upload = (payload) => {
  return {
    type: types.UPLOAD_IMAGE,
    payload,
  };
};

export const ocr = (payload) => {
  return {
    type: types.GET_TEXT_FROM_IMAGE,
    payload,
  };
};
