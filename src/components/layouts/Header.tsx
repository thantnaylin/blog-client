import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg='dark' data-bs-theme='dark'>
                <Container fluid>
                    <LinkContainer to='/'>
                        <Navbar.Brand className='ps-2 ps-md-5 brand-text'>Jiji's Space</Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;