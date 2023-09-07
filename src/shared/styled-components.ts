import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const NavBrand = styled(Navbar.Brand)`
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
`;

export const BackgroundImage = styled.div<{ $imageUrl: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${props =>
    props.$imageUrl || `${process.env.PUBLIC_URL}/assets/banner-image.jpg`});
  background-position-y: center;
  background-position-x: left;
  background-size: cover;
`;
