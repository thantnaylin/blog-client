import React, { useEffect, useState } from "react";
import { IStory } from "../../shared/interfaces";
import { Badge, Card, Col, Row } from "react-bootstrap";

export const StoryListing: React.FC = () => {
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
    },
    {
      id: "5",
      title: "How Cats Saved My Marriage",
      excerpt: "It took him a month to finish the meal.",
      storyImageUrl:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=50"
    },
    {
      id: "6",
      title: "Everything You Need to Know About Forest",
      excerpt: "Happy llama, sad llama, mentally disturbed llama",
      storyImageUrl:
        "https://images.unsplash.com/photo-1516141260589-1e9f5eb6d69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=50"
    },
    {
      id: "7",
      title: "14 Amazing Facts About Seoul",
      excerpt:
        "It would have been a better night if the guys next to us weren't in the splash zone.",
      storyImageUrl:
        "https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=50"
    },
    {
      id: "8",
      title: "A good day in Singapore",
      excerpt: "The irony of the situation wasn't lost on anyone in the room.",
      storyImageUrl:
        "https://images.unsplash.com/photo-1542114740389-9b46fb1e5be7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=50"
    },
    {
      id: "9",
      title: "Art Gallery Made Simple: What You Need to Know",
      excerpt: "The irony of the situation wasn't lost on anyone in the room.",
      storyImageUrl:
        "https://images.unsplash.com/photo-1605429523419-d828acb941d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=50"
    }
  ];

  useEffect(() => {
    setStories(mockUpStories);
  }, []);

  return (
    <section className="pb-5 pt-0 mb-5">
      <h1 className="text-center text-warning">Latest Stories</h1>
      <Row className="mt-5">
        {stories.map(story => (
          <Col
            key={story.id}
            className="d-flex align-items-stretch col-12 col-md-4"
          >
            <Card className="mb-5 w-100">
              <Card.Img variant="top" src={story.storyImageUrl}></Card.Img>
              <Card.Body>
                <Card.Title>
                  <p className="cursor-pointer fw-bold">{story.title}</p>
                </Card.Title>
                <Card.Text>
                  {/*<Badge bg="warning" className="text-small">*/}
                  {/*  Category*/}
                  {/*</Badge>*/}
                  <span className="text-small fw-bold text-warning">
                    Category
                  </span>
                  <small className="d-block">{story.excerpt}</small>
                </Card.Text>
                <p className="text-muted text-small">09/09/2023</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};
