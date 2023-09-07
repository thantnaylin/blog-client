import React, { useEffect, useState } from "react";
import { IStory } from "../../shared/interfaces";
import { StoryCarousel } from "../ui/StoryCarousel";

export const PostsScreen: React.FC = props => {
  const [stories, setStories] = useState<IStory[]>([]);

  const mockUpStories: IStory[] = [
    {
      id: "1",
      title: "Aesthetic Die/s Every Minute You Don't Read This Article",
      excerpt: "She folded her handkerchief neatly.",
      storyImageUrl:
        "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=50"
    },
    {
      id: "2",
      title: "The Fascinating Science of Aesthetic",
      excerpt: "Excitement replaced fear until the final moment",
      storyImageUrl:
        "https://blog.foster.uw.edu/wp-content/uploads/2018/01/Seoul-Kevin-7.jpg"
    },
    {
      id: "3",
      title: "A Fascinating Behind-the-Scenes Look at Aesthetic",
      excerpt:
        "They finished building the road they knew no one would ever use.",
      storyImageUrl:
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=50"
    },
    {
      id: "4",
      title: "Think Aesthetic Is Too Good to Be True? We Have News for You",
      excerpt: "The irony of the situation wasn't lost on anyone in the room.",
      storyImageUrl:
        "https://images.unsplash.com/photo-1545989253-02cc26577f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=50"
    }
  ];

  useEffect(() => {
    console.log("hook running");
    // setTimeout(() => setStories(mockUpStories), 500);
    setStories(mockUpStories);
  }, []);

  return (
    <>
      <h1 className="text-center">Pinned Posts</h1>
      <div className="py-5">
        <StoryCarousel stories={stories} />
      </div>
    </>
  );
};
