import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  /* existing styles */
`;

export const NavLink = styled(Link)`
  /* existing styles */
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  /* existing styles */
`;

export const NavBtn = styled.nav`
  /* existing styles */
`;

export const NavBtnLink = styled(Link)`
  /* existing styles */
`;

export const OffCanvas = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 15;
  transition: transform 0.3s ease-in-out;
  transform: translateX(0);
  @media screen and (max-width: 768px) {
    transform: translateX(0);
  }
`;

export const OffCanvasContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 2rem;
  & a {
    padding: 1rem;
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    &:hover {
      color: #f30404;
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  &:hover {
    color: #f30404;
  }
`;
