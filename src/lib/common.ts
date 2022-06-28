import { userTypeInterface } from "./types";

const setUserInfo = (userInput: userTypeInterface) => {
  let inputInfo = JSON.stringify(userInput);
  localStorage.setItem("userInput", inputInfo);
};

const getUserInfo = (key: string) => {
  return localStorage.getItem(key);
};

const removeUserInfo = (key: string) => {
  localStorage.removeItem(key);
};

const setProfileImg = (path: string) => {
  localStorage.setItem("filePath", path);
};

const getProfileImg = (key: string) => {
  return localStorage.getItem(key);
};

const makeJson = (obj: object) => {
  return JSON.stringify(obj);
};

const parseJson = (json: string) => {
  return JSON.parse(json);
};

export default {
  setProfileImg,
  getUserInfo,
  removeUserInfo,
  setUserInfo,
  getProfileImg,
  makeJson,
  parseJson,
};
