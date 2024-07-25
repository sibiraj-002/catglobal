import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../img/catalyst-global-logo.svg';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  OffCanvas,
  OffCanvasContent,
  CloseButton
} from './NavbarElements';


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
    <style>
      {
        `
      /* Navbar.css */

.navbar {
    display: flex;
    align-items: center;
    justify-content: center; /* Center all items */
    padding: 10px 20px;
    background-color: transparent;
    transition: background-color 0.3s ease;
}

.colorChange {
    background-color: rgba(0, 0, 0, 0.7);
}

.nav-container {
    display: flex;
    align-items: center;
    width: auto; /* Adjust width to auto */
    justify-content: center; /* Center all items */
    position: relative;
}

.nav-logo {
    width: 150px;
}

.menu-icon, .close-icon {
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    margin:0;
    color:white
}

.nav-menu {
    display: flex;
    align-items: center;
    list-style: none;
    margin-left: 20px; /* Add margin to create space between logo and menu */
}

.nav-item {
    margin-left: 20px;
}

.nav-link {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: red;
}

.nav-btn {
    background-color: #e74c3c;
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    margin-left: auto;
    transition: background-color 0.3s ease;
}

.nav-btn:hover {
    background-color: #c0392b;
}
.menu-icon {
    position: absolute;
    right: -90px; /* Position the menu icon to the right */
}
.offcanvas {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    transition: transform 0.3s ease;
    transform: translateX(100%);
}

.offcanvas.show {
    transform: translateX(0);
}

.close-icon {
    align-self: flex-end;
}

.offcanvas-content {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.offcanvas-link {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.offcanvas-link:hover {
    color: #f1c40f;
}

@media (max-width: 768px) {
    .menu-icon {
      display: block;

    }
      .menu.icon{
        align-content: start;
        justify-content: start;
        align-items: start;
        }

         .nav-container {
        justify-content: space-between; /* Align items to the start and end */
    }

    .nav-menu {
      display: none;
    }

    .nav-btn {
      display: none;
    }
}

  
        `
      }
      </style>
      <nav className={navbar ? 'navbar colorChange' : 'navbar'}>

        <div className="nav-container">
         <FaBars onClick={toggleOffCanvas} className="menu-icon " />

          <a href="/">
            <img src={logo} alt="Catalyst Global Logo" className="nav-logo ju" />
          </a>
          <ul className="nav-menu mt-4">
            <li className="nav-item text-red px-3">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item px-3">
              <Link to="/organisations" className="nav-link">Organisations</Link>
            </li>
            <li className="nav-item px-3">
              <Link to="/partners" className="nav-link">Partners</Link>
            </li>
            <li className="nav-item px-3">
              <a href="https://communityactioncollab.org" className="nav-link" target="_blank" rel="noopener noreferrer">
                Community Action Collab
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {showOffCanvas && (
        <>
       
        <OffCanvas>
          
          <CloseButton onClick={toggleOffCanvas}>
            <FaTimes />
          </CloseButton>
          <OffCanvasContent>
            <NavLink to="/" onClick={toggleOffCanvas}>Home</NavLink>
            <NavLink to="/organisations" onClick={toggleOffCanvas}>Organisations</NavLink>
            <NavLink to="/partners" onClick={toggleOffCanvas}>Partners</NavLink>
            <NavLink to="https://communityactioncollab.org" target="_blank" onClick={toggleOffCanvas}>
              Community Action Collab
            </NavLink>
          </OffCanvasContent>
        </OffCanvas>
        </>
      )
      }
    </>
  );
};

export default Navbar;