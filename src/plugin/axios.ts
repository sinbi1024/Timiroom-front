import Axios from "axios";
import common from "../lib/common";

let axios = Axios.create({
  baseURL: "http://3.37.9.131:4000",
  timeout: 1000 * 60 * 3,
  headers: { "Content-Type": "application/json" },
});

export const getApiClient = () => {
  if (!axios) {
    let axios = Axios.create({
      baseURL: "http://3.37.9.131:4000",
      timeout: 1000 * 60 * 3,
      headers: { "Content-Type": "application/json" },
    });
  }

  return axios;
};

export const ApiClient = async (url: string, data: object | string) => {
  return await getApiClient()
    .post(url, data)
    .then((res) => {
      console.log("냥:", res);
      return res.data;
    });
};
