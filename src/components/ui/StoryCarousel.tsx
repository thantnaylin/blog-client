import React from "react";
import { Carousel } from "react-bootstrap";
import { CarouselImage } from "../../shared/styled-components";
import { IStory } from "../../services/interfaces";

// type StoryCarouselProp = IStory[];
type StoryCarouselProp = {
  stories: IStory[];
  onClick: (storyId: number) => void;
};

export const StoryCarousel: React.FC<StoryCarouselProp> = ({
  stories,
  onClick
}) => {
  return (
    <Carousel interval={null} className="w-100-md-50 m-auto">
      {stories.map(story => (
        <Carousel.Item key={story.id} onClick={() => onClick(story.id)}>
          <CarouselImage
            src={story.attributes.mainImage.data.attributes.url}
            className="w-100"
          />
          <Carousel.Caption>
            <h3>{story.attributes.title}</h3>
            <p className="d-none d-md-block">{story.attributes.excerpt}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
