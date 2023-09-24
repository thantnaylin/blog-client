import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { CategoryStack } from "./CategoryStack";
import { ICategoryDetails, IStory } from "../../services/interfaces";
import { getAllStories, getCategories } from "../../services/service";

export const defaultActiveCategory: ICategoryDetails = {
  id: 0,
  attributes: {
    categoryName: "All",
    createdAt: "",
    publishedAt: "",
    updatedAt: ""
  }
};

export const StoryListing: React.FC = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isStoriesLoading, setIsStoriesLoading] = useState<boolean>(false);
  const [isCategoryLoading, setIsCategoryLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategoryDetails[]>([]);
  const [activeCategory, setActiveCategory] = useState<ICategoryDetails>(
    defaultActiveCategory
  );

  const categoryChangeHandler = (category: ICategoryDetails) => {
    if (category.id === activeCategory.id || isStoriesLoading) {
      return;
    }
    setActiveCategory(category);
    setIsStoriesLoading(true);
    const fetchStories = async () => {
      const res = await getAllStories(category.id);
      setStories(res.data);
    };
    fetchStories().then(() => {
      setIsStoriesLoading(false);
    });
  };

  useEffect(() => {
    setIsStoriesLoading(true);
    const fetchStories = async () => {
      const res = await getAllStories(activeCategory.id);
      setStories(res.data);
    };
    fetchStories().then(() => {
      setIsStoriesLoading(false);
    });
  }, []);

  useEffect(() => {
    setIsCategoryLoading(true);
    const fetchCategories = async () => {
      const categoryResult = await getCategories();
      setCategories(categoryResult.data);
    };
    fetchCategories().then(() => {
      setIsCategoryLoading(false);
    });
  }, []);

  return (
    <section className="pb-5 pt-0 mb-5">
      <h1 className="text-center text-warning">Latest Stories</h1>

      <div className="py-3">
        {isCategoryLoading ? (
          <p>Loading...</p>
        ) : (
          <CategoryStack
            activeCategory={activeCategory}
            categories={categories}
            onClick={categoryChangeHandler}
          />
        )}
      </div>

      <Row className="mt-5">
        {isStoriesLoading ? (
          <p>Loading...</p>
        ) : (
          stories.map(story => (
            <Col
              key={story.id}
              className="d-flex align-items-stretch col-12 col-md-4"
            >
              <Card className="mb-5 w-100">
                <Card.Img
                  variant="top"
                  src={story.attributes.mainImage.data.attributes.url}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>
                    <p className="cursor-pointer fw-bold">
                      {story.attributes.title}
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <span className="text-small fw-bold text-warning">
                      {story.attributes.category.data.attributes.categoryName}
                    </span>
                    <small className="d-block">
                      {story.attributes.excerpt}
                    </small>
                  </Card.Text>
                  <p className="text-muted text-small">09/09/2023</p>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </section>
  );
};
