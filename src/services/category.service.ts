import axios from "axios";
import { ICategoryResult } from "./category.interfaces";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const getCategories = async (): Promise<ICategoryResult> => {
  const res = await axios.get<ICategoryResult>("/api/categories");
  const { data } = res;
  return data;
};
