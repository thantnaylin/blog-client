import React from "react";
import Header from "../layouts/Header";
import { PinnedStories } from "../ui/PinnedStories";
import { Container } from "react-bootstrap";
import { About } from "../ui/About";
import { FaCircleChevronUp } from "react-icons/fa6";
import { StoryListing } from "../ui/StoryListing";

export const HomeScreen: React.FC = () => {
  const backToTopBtnStyle: any = {
    fontSize: "xxx-large",
    cursor: "pointer",
    position: "fixed",
    right: "2rem",
    bottom: "2rem",
    color: "#edb603ff"
  };

  const backToTopClickHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <Header />
      <main className="py-5 mb-5">
        <Container>
          <PinnedStories />
          <StoryListing />
          {/*<About />*/}
        </Container>
      </main>
      <FaCircleChevronUp
        style={backToTopBtnStyle}
        onClick={backToTopClickHandler}
      />
    </>
  );
};
