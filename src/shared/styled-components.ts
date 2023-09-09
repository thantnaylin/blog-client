import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { device } from "./screen-sizes";

export const NavBrand = styled(Navbar.Brand)`
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
`;

export const BackgroundImage = styled.div<{ $imageUrl: string }>`
  width: 100%;
  height: 100vh;
  //background-image: url(${props =>
    props.$imageUrl || `${process.env.PUBLIC_URL}/assets/banner-image.jpg`});
  background-color: #e8b201ff;
  background-position-y: center;
  background-position-x: center;
  background-size: cover;
`;

export const CarouselImage = styled.img`
  height: auto;
  max-height: 400px;
  object-fit: cover;
  cursor: pointer;
  &:hover {
    filter: brightness(0.5);
  }
  @media ${device.mobileS} and (max-width: 1024px) {
    height: auto;
    max-height: 230px;
  }
`;
