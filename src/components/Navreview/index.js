import React, { useState, useEffect } from 'react';
import { Nav, NavLink, Bars, NavMenu} from './NavbarElements';
import { Button } from 'react-bootstrap';

const Navreview = () => {

	const [navbar, setNavbar] = useState(false)
	//const [navbarLogo, setNavbarLogo] = useState(false)

	const changeBackground = () => {
		//console.log(window.scrollY)
		if (window.scrollY >= 20) {
		  setNavbar(true)
		} else {
		  setNavbar(false)
		}
	  }
	
	  useEffect(() => {
		changeBackground()
		// adding the event when scroll change background
		window.addEventListener("scroll", changeBackground)
	  })

	return (
		<Nav className={navbar ? "navbar colorChange" : "navbar"}>
			<Bars />
			<NavMenu>
				<NavLink to='/overview'>
					WHO ARE WE
				</NavLink>
				<NavLink to='#whatwedo'>
					WHAT WE DO
				</NavLink>
				<NavLink to='/overview'>
					WHERE WE WORK
				</NavLink>
				<NavLink to='/overview'>
					OUR TEAM
				</NavLink>
				<NavLink to='/overview'>
					<Button style={{backgroundColor:'#4F3475',border:'1px solid #9179B3'}}>Conatct Us</Button>
				</NavLink>
			</NavMenu>
		</Nav>
	);
};

export default Navreview;
