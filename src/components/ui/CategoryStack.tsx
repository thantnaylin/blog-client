import React from "react";
import { StoryCategory, StoryCategoryMap } from "../../shared/enums";
import { Badge, Dropdown, DropdownButton, Form, Stack } from "react-bootstrap";

export type CategoryStackProps = {
  activeCategory: StoryCategory;
  onClick: (category: StoryCategory) => void;
};

export const CategoryStack: React.FC<CategoryStackProps> = ({
  activeCategory,
  onClick
}) => {
  return (
    <>
      {/*className="d-none d-md-flex"*/}
      <Stack
        direction="horizontal"
        gap={2}
        className="flex-wrap flex-md-wrap-reverse"
      >
        {StoryCategoryMap.map(x => (
          <Badge
            className="cursor-pointer"
            bg={x.EnumValue === activeCategory ? "dark" : "warning"}
            key={x.EnumValue}
            onClick={() => onClick(x.EnumValue)}
          >
            {x.Text}
          </Badge>
        ))}
      </Stack>

      {/*<div className="d-block d-md-none">*/}
      {/*  <Form.Select*/}
      {/*    aria-label="Categories"*/}
      {/*    defaultValue={activeCategory}*/}
      {/*    onChange={e =>*/}
      {/*      onClick((e.currentTarget.value as unknown) as StoryCategory)*/}
      {/*    }*/}
      {/*  >*/}
      {/*    {StoryCategoryMap.map(x => (*/}
      {/*      <option key={x.EnumValue} value={x.EnumValue}>*/}
      {/*        {x.Text}*/}
      {/*      </option>*/}
      {/*    ))}*/}
      {/*  </Form.Select>*/}
      {/*</div>*/}
    </>
  );
};
