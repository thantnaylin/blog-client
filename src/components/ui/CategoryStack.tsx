import React from "react";
import { Badge, Stack } from "react-bootstrap";
import { ICategoryDetails } from "../../services/interfaces";
import { defaultActiveCategory } from "./StoryListing";

export type CategoryStackProps = {
  activeCategory: ICategoryDetails;
  categories: ICategoryDetails[];
  onClick: (category: ICategoryDetails) => void;
};

export const CategoryStack: React.FC<CategoryStackProps> = ({
  activeCategory,
  categories,
  onClick
}) => {
  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="flex-wrap flex-md-wrap-reverse"
      >
        {/*Default (ALL)*/}
        <Badge
          className="cursor-pointer"
          bg={
            defaultActiveCategory.id === activeCategory.id ? "dark" : "warning"
          }
          key={defaultActiveCategory.id}
          onClick={() => onClick(defaultActiveCategory)}
        >
          {defaultActiveCategory.attributes.categoryName}
        </Badge>

        {categories.map(x => (
          <Badge
            className="cursor-pointer"
            bg={x.id === activeCategory.id ? "dark" : "warning"}
            key={x.id}
            onClick={() => onClick(x)}
          >
            {x.attributes.categoryName}
          </Badge>
        ))}
      </Stack>
    </>
  );
};
