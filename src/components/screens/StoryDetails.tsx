import React, { useEffect, useState } from "react";
import { Badge, Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavBrand } from "../../shared/styled-components";
import { useParams } from "react-router-dom";
import { getStoryById } from "../../services/service";
import { IStoryDetailsAttributes } from "../../services/interfaces";

import "../../index.css";
import Markdown from "react-markdown";

export const StoryDetails: React.FC<{}> = props => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [storyDetails, setStoryDetails] = useState<IStoryDetailsAttributes>();

  useEffect(() => {
    setIsLoading(true);
    const fetchStory = async () => {
      const res = await getStoryById(id);
      setStoryDetails(res.data.attributes);
    };

    fetchStory().then(() => {
      setIsLoading(false);
    });
  }, []);

  const navBarStyle = {
    backgroundColor: "#e8b201"
  };

  const getImageUrl = (): string => {
    const imageUrl = storyDetails?.mainImage?.data.attributes.url;
    return imageUrl ? imageUrl : "";
  };

  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <LinkContainer to="/">
            <div className="ps-2 ps-md-5">
              <NavBrand>JIJI'S SPACE</NavBrand>
            </div>
          </LinkContainer>
        </Container>
      </Navbar>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="bannerImageContainer">
            <img src={getImageUrl()} alt="" />
            <small className="d-block text-center text-muted text-small mt-3">
              {storyDetails?.mainImage?.data.attributes.caption}
            </small>
          </div>
          <div className="contentContainer mt-5 w-100-md-85">
            <h1 className="text-center">{storyDetails?.title}</h1>

            <div className="px-1 px-md-5 markdown-container py-5">
              <Markdown>{storyDetails?.content}</Markdown>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
