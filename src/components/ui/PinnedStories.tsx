import React, { useEffect, useState } from "react";
import { StoryCarousel } from "./StoryCarousel";
import { IStory } from "../../services/interfaces";
import { getPinnedStories } from "../../services/service";
import { useNavigate } from "react-router-dom";

export const PinnedStories: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [stories, setStories] = useState<IStory[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchPinnedStories = async () => {
      const pinnedStories = await getPinnedStories();
      setStories(pinnedStories.data);
    };

    fetchPinnedStories().then(() => {
      setIsLoading(false);
    });
  }, []);

  const onStoryClick = (id: number) => {
    const url = `/story/${id}`;
    navigate(url);
  };

  return (
    <section className="py-5" id="stories">
      <h1 className="text-center text-warning">Recommended Stories</h1>
      <p className="text-center">Top stories recommended by me.</p>
      <div className="py-5">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <StoryCarousel stories={stories} onClick={onStoryClick} />
        )}
      </div>
    </section>
  );
};
