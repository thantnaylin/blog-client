import axios, { AxiosResponse } from "axios";
import { ICategoryResult } from "./category.interfaces";

export const getCategories = async (): Promise<ICategoryResult> => {
  const res = await axios.get<ICategoryResult>(
    "http://localhost:1337/api/categories"
  );
  const { data } = res;
  return data;
};
