import { EnumMap } from "./interfaces";

export enum StoryCategory {
  All,
  Information,
  PhotoEssay,
  Interview,
  Digital
}

export const StoryCategoryMap: EnumMap[] = [
  {
    EnumValue: StoryCategory.All,
    Text: "All"
  },
  {
    EnumValue: StoryCategory.Information,
    Text: "Information"
  },
  {
    EnumValue: StoryCategory.PhotoEssay,
    Text: "Photo Essay"
  },
  {
    EnumValue: StoryCategory.Interview,
    Text: "Interview"
  },
  {
    EnumValue: StoryCategory.Digital,
    Text: "Digital"
  }
];
