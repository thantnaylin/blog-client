import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {NavBrand} from "../../shared/styled-components";
import {PiArticleNyTimesFill} from "react-icons/pi";
import {RiContactsLine} from "react-icons/ri";

const Header = () => {
    return (
        <header>
            <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
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
                                    <div className="d-flex align-items-center justify-content-lg-between">
                                        <RiContactsLine/>
                                        <div className='ps-2'>ABOUT ME</div>
                                    </div>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    );
}

export default Header;