import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BackgroundImage, NavBrand } from "../../shared/styled-components";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";

import "../../index.css";

const Header = () => {
  return (
    <header>
      <BackgroundImage $imageUrl="https://images.unsplash.com/photo-1583144584182-1717fab24b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100">
        <Navbar expand="lg" data-bs-theme="dark">
          <Container fluid>
            <LinkContainer to="/">
              <div className="ps-2 ps-md-5">
                <NavBrand>JIJI'S SPACE</NavBrand>
              </div>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>

            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="ml-auto">
                <LinkContainer to="/stories">
                  <Nav.Link>
                    <div className="d-flex align-items-center justify-content-lg-between">
                      <PiArticleNyTimesFill />
                      <div className="ps-2">STORIES</div>
                    </div>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>
                    <div className="d-flex align-items-center justify-contentht-lg-between">
                      <RiContactsLine />
                      <div className="ps-2">ABOUT ME</div>
                    </div>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div
          className="position-absolute top-25 left-0 right-0"
          id="introduction"
        >
          <Container>
            <Row>
              <Col className="col-12" md={3}></Col>
              <Col className="col-12 px-3 px-md-2" md={6}>
                <h1 className="text-light fw-bold text-center">
                  Some Title Text
                </h1>
                <p className="text-light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Col>
              <Col className="col-12" md={3}></Col>
            </Row>
          </Container>
        </div>
      </BackgroundImage>
    </header>
  );
};

export default Header;
