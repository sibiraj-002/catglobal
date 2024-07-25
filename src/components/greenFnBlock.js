import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import GreenLogo from '../img/Green_foundation_logo.png';
import GreenPoster from '../img/green-poster.png';

export default class GreenFnBlock extends Component {
    render () {
        return (
            <Container fluid className="bg-black">
                <Container className="bg-greenfn">
                    <Row>
                        <Col md={6}>
                            <img src={GreenLogo} alt="GreenFoundation Logo" height={120} width={'auto'} />
                        </Col>
                        <Col md={6} style={{textAlign:'right'}}>
                            <Button variant="success" href="https://greenfoundation.in/" target="_blank" rel="noopener noreferrer">Visit Site</Button>
                        </Col>
                    </Row>
                    <Container className="bg-white">
                        <Row>
                            <Col md={6}>
                                <h2>Genetic, Resource, Ecology, Energy and Nutrition</h2><br /><br />
                                <p><a href="https://greenfoundation.in" target="_blank" rel="noopener noreferrer">GREEN Foundation</a> works towards building a well-preserved ecosystem diversity for the sustainable rural livelihoods of the present generation without eroding the resource base of the future.</p>
                                <p>GFs approach has evolved to a more comprehensive bio-region microsystem – called regenerative communities – bringing together the Agri/Food and Health systems to ensure the wealth and well-being of people and the planet.</p><br />
                                <h2>Est. 1994</h2><br /><br />
                                <h2>Direct Reach:</h2><br /><br />
                                <ul>
                                    <li>2,400 women farmers (about 10,000 people)</li>
                                    <li>14 enterprise groups</li>
                                    <li>One Farmer Producer Organization</li>
                                </ul>
                            </Col>
                            <Col md={6}>
                                <img src={GreenPoster} alt="Greenfoundation Poster" width={'60%'} height={'auto'} className="imgalignmiddle" />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        )
    }
}