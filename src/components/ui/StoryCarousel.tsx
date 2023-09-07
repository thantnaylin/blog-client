import { IStory } from "../../shared/interfaces";
import React from "react";
import { Carousel } from "react-bootstrap";
import { CarouselImage } from "../../shared/styled-components";

type StoryCarouselProp = IStory[];

export const StoryCarousel: React.FC<{ stories: StoryCarouselProp }> = ({
  stories
}) => {
  return (
    <Carousel interval={null} className="w-100-md-50 m-auto">
      {stories.map(story => (
        <Carousel.Item key={story.id}>
          <CarouselImage src={story.storyImageUrl} className="w-100" />
          <Carousel.Caption>
            <h3>{story.title}</h3>
            <p className="d-none d-md-block">{story.excerpt}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
