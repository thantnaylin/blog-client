import { StoryStatus } from "./enums";

export interface IParagraphProps {
  title?: string;
  paragraphs: string[];
}

export interface IStory {
  id: string;
  title: string;
  storyImageUrl: string;
  excerpt: string;
  status: StoryStatus;
}
