import React, { useState, useEffect } from 'react';
import logo from '../../img/catalyst-global-logo.svg';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, OffCanvas, OffCanvasContent, CloseButton } from './NavbarElements';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const toggleOffCanvas = () => {
    setShowOffCanvas(!showOffCanvas);
  };

  useEffect(() => {
    changeBackground();

    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <>
      <Nav className={navbar ? 'navbar colorChange' : 'navbar'}>
        <Bars onClick={toggleOffCanvas} />
        <a href='/'>
          <img src={logo} alt="Catalyst Global Logo" />
        </a>
        {/* <NavMenu>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/organisations'>Organisations</NavLink>
          <NavLink to='/partners'>Partners</NavLink>
          <NavLink to='https://communityactioncollab.org' target='_blank'>
            Community Action Collab
          </NavLink>
        </NavMenu> */}
        {/* <NavBtn>
          <NavBtnLink to='/contact'>Contact Us</NavBtnLink>
        </NavBtn> */}
      </Nav>

      {showOffCanvas && (
        <OffCanvas>
          <CloseButton onClick={toggleOffCanvas}>
            <FaTimes />
          </CloseButton>
          <OffCanvasContent>
            <NavLink to='/' onClick={toggleOffCanvas}>Home</NavLink>
            <NavLink to='/organisations' onClick={toggleOffCanvas}>Organisations</NavLink>
            <NavLink to='/partners' onClick={toggleOffCanvas}>Partners</NavLink>
            <NavLink to='https://communityactioncollab.org' target='_blank' onClick={toggleOffCanvas}>
              Community Action Collab
            </NavLink>
          </OffCanvasContent>
        </OffCanvas>
      )}
    </>
  );
};

export default Navbar;
