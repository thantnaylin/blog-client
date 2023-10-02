import axios from "axios";
import { ICategoryResult, IStoryDetails, IStoryResult } from "./interfaces";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.REACT_APP_STRAPI_API_KEY}`
};

export const getCategories = async (): Promise<ICategoryResult> => {
  const res = await axios.get<ICategoryResult>("/api/categories");
  const { data } = res;
  return data;
};

export const getPinnedStories = async (): Promise<IStoryResult> => {
  const res = await axios.get<IStoryResult>(
    "/api/stories?fields[0]=title&fields[1]=excerpt&populate[mainImage][fields][0]=name&populate[mainImage][fields][1]=url&[filters][isPinned][$eq]=true&populate[category][fields][0]=categoryName"
  );
  const { data } = res;
  return data;
};

export const getAllStories = async (
  categoryId: number
): Promise<IStoryResult> => {
  let queryParam =
    "?populate[mainImage][fields][0]=name&populate[category][fields][0]=categoryName&populate[mainImage][fields][1]=url&fields[0]=title&fields[1]=excerpt&fields[2]=createdAt&sort[0]=createdAt:desc";

  if (categoryId > 0) {
    queryParam += `&filters[category][id][$eq]=${categoryId}`;
  }

  const res = await axios.get<IStoryResult>(`/api/stories${queryParam}`);
  const { data } = res;
  return data;
};

export const getStoryById = async (
  id: string | undefined
): Promise<IStoryDetails> => {
  const apiString = `/api/stories/${id}?populate[mainImage][fields][0]=name&populate[category][fields][0]=categoryName&populate[mainImage][fields][1]=url&populate[mainImage][fields][2]=caption`;

  const res = await axios.get<IStoryDetails>(apiString);
  const { data } = res;
  return data;
};
