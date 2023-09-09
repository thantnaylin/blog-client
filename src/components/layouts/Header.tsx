import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BackgroundImage, NavBrand } from "../../shared/styled-components";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";

import "../../index.css";
import { BsMouse } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <BackgroundImage $imageUrl="">
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
                <Nav.Link href="#stories">
                  <div className="d-flex align-items-center justify-content-lg-between">
                    <PiArticleNyTimesFill />
                    <div className="ps-2">STORIES</div>
                  </div>
                </Nav.Link>

                <Nav.Link href="#about">
                  <div className="d-flex align-items-center justify-contentht-lg-between">
                    <RiContactsLine />
                    <div className="ps-2">ABOUT ME</div>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div
          className="position-absolute top-40 left-0 right-0"
          id="introduction"
        >
          <Container>
            <Row>
              <Col className="col-12" md={3}></Col>
              <Col className="col-12 px-3 px-md-2" md={6}>
                <h1 className="text-light fw-bold text-center">
                  Hi, I'm <strong className="p-2 bg-black">Heo Jihye</strong>
                </h1>
                <p className="text-light mt-4 text-center">
                  An enthusiastic product designer, based in Seoul, South Korea.
                </p>
              </Col>
              <Col className="col-12" md={3}></Col>
            </Row>
          </Container>
        </div>

        <div className="scroll-icon-container">
          <BsMouse></BsMouse>
          <p>Scroll Down</p>
        </div>
      </BackgroundImage>
    </header>
  );
};

export default Header;
