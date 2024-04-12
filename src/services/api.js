import axios from "axios";

export const customTodoAxios = axios.create({
  baseURL: "http://localhost:9190/ptn/ajaxPtnInfluent.do",
});