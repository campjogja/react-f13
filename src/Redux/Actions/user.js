import Axios from "axios";

const URL_STRING = "http://localhost:8000/user";

export const getAllUser = () => {
  return {
    type: "GET_ALL_USER",
    payload: Axios.get(URL_STRING)
  };
};
