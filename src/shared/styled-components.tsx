import styled from "styled-components";
import {Navbar} from "react-bootstrap";

export const NavBrand = styled(Navbar.Brand)`
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
`;

export const BackgroundImage = styled.div<{ $imageUrl: string; }>`
  width: 100%;
  height: 50vh;
  background-image: url(${props => props.$imageUrl || 'https://images.pexels.com/photos/5480787/pexels-photo-5480787.jpeg'});
  background-position-y: center;
  background-position-x: center !important;
  background-size: cover;
`