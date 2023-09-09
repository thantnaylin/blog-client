import axios from "axios";
import { IStory } from "../shared/interfaces";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const getPinnedStories = async (): Promise<IStory[]> => {
  const { data } = await axios.get("stories");
  return data;
};
