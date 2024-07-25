import React, { Component } from "react";
import { Container, Carousel } from 'react-bootstrap';
import logo from '../img/catalyst-global-logo.svg';

export class Banner extends Component {
    render () {
        return (
           

            <>
             <Container fluid className="banner-bg-1">
                        <div className="fp-hero"></div>
                        <div className="fp-hero-center">
                            <img src={logo} alt="Catalyst Global Logo" />
                            <p>Catalyst Foundation is a social enterprise platform that seeks to promote health and wealth of vulnerable communities.</p>
                            <a href="/organisations" className="hero-findbtn wow fadeInUp">FIND OUT MORE</a>
                        </div>
                    </Container>
            </>
        )
    }
}
export default Banner;

 // <Carousel>
                {/* <Carousel.Item> */}
                   
                {/* </Carousel.Item> */}
                {/* <Carousel.Item>
                    <Container fluid className="banner-bg-2">
                        <div className="fp-hero"></div>
                        <div className="fp-hero-center">
                            <img src={logo} alt="Catalyst Global Logo" />
                            <p>Catalyst Foundation is a social enterprise platform that seeks to promote health and wealth of vulnerable communities.</p>
                            <a href="/" className="hero-findbtn wow fadeInUp">FIND OUT MORE</a>
                        </div>
                    </Container>
                </Carousel.Item> */}
            // </Carousel>