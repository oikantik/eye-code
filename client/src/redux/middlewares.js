import { axiosInstance } from "../utils/axios";

export const upload = async (payload) => {
  const data = new FormData();
  data.append("code", payload[0]);
  const response = await axiosInstance.post("/upload", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return {
    ...response.data,
  };
};

export const ocr = async (payload) => {
  console.log(payload);
  const response = await axiosInstance.post("/ocr", { file_url: payload });
  console.log(response);
  return {
    ...response.data,
  };
};

export const heroku = async () => {
  const response = await axiosInstance.get("/");
  return {
    ...response.data,
  };
};
