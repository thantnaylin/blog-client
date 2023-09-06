import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {BackgroundImage, NavBrand} from "../../shared/styled-components";
import {PiArticleNyTimesFill} from "react-icons/pi";
import {RiContactsLine} from "react-icons/ri";

const Header = () => {
    return (
        <header>
            <BackgroundImage
                $imageUrl='https://images.unsplash.com/photo-1583144584182-1717fab24b1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100'>
                <Navbar expand='lg' data-bs-theme='dark'>
                    <Container fluid>
                        <LinkContainer to='/'>
                            <div className="ps-2 ps-md-5">
                                <NavBrand>
                                    JIJI'S SPACE
                                </NavBrand>
                            </div>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>

                        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                            <Nav className="ml-auto">
                                <LinkContainer to="/stories">
                                    <Nav.Link>
                                        <div className="d-flex align-items-center justify-content-lg-between">
                                            <PiArticleNyTimesFill/>
                                            <div className='ps-2'>STORIES</div>
                                        </div>

                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <Nav.Link>
                                        <div className="d-flex align-items-center justify-contentht-lg-between">
                                            <RiContactsLine/>
                                            <div className='ps-2'>ABOUT ME</div>
                                        </div>
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </BackgroundImage>
        </header>
    );
}

export default Header;