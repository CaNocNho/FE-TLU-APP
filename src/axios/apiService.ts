import { PATH_API } from "../constants/pathApi";
import { apiException } from "./apiException";
import axiosClient from "./axiosClient";

export const getHttpStatusCode = (response: any) => {
  let data: any = {};
  if (response.data.length >= 0) {
    data.data = response.data;
  } else {
    data = response.data;
  }
  data.statusCode = response.status;
  return data;
};

export const handleGetApiService = async (path: string, option: any, fnCallback: any) => {
  try {
    const response = await axiosClient.get(path, option);
    return getHttpStatusCode(response);
  } catch (error) {
    return apiException(error, fnCallback);
  }
};

export const handlePostApiService = async (path: string, option: any, fnCallback?: any, config?: any) => {
  try {
    const response = await axiosClient.post(path, option, config);
    return getHttpStatusCode(response);
  } catch (error: any) {
    return apiException(error, fnCallback);
  }
};

export const handlePutApiService = async (path: string, option: any, fnCallback: any) => {
  try {
    const response = await axiosClient.put(path, option);
    return getHttpStatusCode(response);
  } catch (error: any) {
    return apiException(error, fnCallback);
  }
};

export const handleDeleteApiService = async (path: string, option: any, fnCallback: any) => {
  try {
    const response = await axiosClient.delete(path, { data: option });
    return getHttpStatusCode(response);
  } catch (error) {
    return apiException(error, fnCallback);
  }
};

// export const logOut = async () => {
//   await handlePostApiService(PATH_API.LOGOUT_API, {}, () => {});
//   localStorage.clear();
//   sessionStorage.clear();
// };

export const onRefreshToken = async () => {
  //todo
};
