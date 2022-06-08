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

export default {
  setProfileImg,
  getUserInfo,
  removeUserInfo,
  setUserInfo,
  getProfileImg,
};
