import * as types from "./constants";
import { combineReducers } from "redux";

const initialState = {
  upload: {
    file_url: "",
    loading: false,
    success: false,
    error: false,
  },
  ocr: {
    loading: false,
    success: false,
    error: false,
    text: "",
  },
};

const getOcr = (state = initialState, action) => {
  switch (action.type) {
    case types.UPLOAD_IMAGE:
      return {
        ...state,
        upload: {
          ...state.upload,
          loading: true,
          success: false,
          error: false,
        },
      };
    case types.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        upload: {
          ...state.upload,
          loading: false,
          success: true,
          file_url: action.payload.file_url,
          error: false,
        },
      };

    case types.UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        upload: {
          ...state.upload,
          loading: false,
          success: false,
          error: true,
        },
      };

    case types.GET_TEXT_FROM_IMAGE:
      return {
        ...state,
        ocr: {
          ...state.ocr,
          loading: true,
          success: false,
          error: false,
        },
      };
    case types.GET_TEXT_FROM_IMAGE_SUCCESS:
      return {
        ...state,
        ocr: {
          ...state.ocr,
          loading: false,
          success: true,
          text: action.payload.response,
          error: false,
        },
      };

    case types.GET_TEXT_FROM_IMAGE_FAILURE:
      return {
        ...state,
        upload: {
          ...state.ocr,
          loading: false,
          success: false,
          error: true,
        },
      };
    default:
      return state;
  }
};

export default combineReducers({ getOcr });
