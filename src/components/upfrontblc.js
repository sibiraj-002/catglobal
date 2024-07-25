import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import UpfrontLogo from '../img/upfrontlogo-tr.png';
import Img31 from '../img/Image-31.png';
import Img32 from '../img/Image-32.png';
import Img33 from '../img/Image-33.png';
import Img34 from '../img/Image-34.png';
import Img35 from '../img/Image-35.png';
import Img36 from '../img/Image-36.png';
import Img37 from '../img/Image-37.png';
import Img38 from '../img/Image-38.png';
import Img39 from '../img/Image-39.png';
import Fist from '../img/fist.png';
import Hands from '../img/hands.png';
import Palm from '../img/palms.png';

export default class UpfrontBlock extends Component {
    render () {
        return (
            <Container fluid className="bg-black">
                <Container className="bg-upfront">
                    <Row>
                        <Col md={6}>
                            <img src={UpfrontLogo} alt="Upfront Logo" height={70} width={'auto'} id="upfront" />
                        </Col>
                        <Col md={6} style={{textAlign:'right'}}>
                            <Button variant="danger" href="https://upfront.global" target="_blank" rel="noopener noreferrer">Visit Site</Button>
                        </Col>
                    </Row>
                    <Container className="bg-white">
                        <p>Working to improve the lives and work of front line workers by changing mindsets and behaviours, as well as enhancing financial security and the “systems” they work with. To achieve this, we focus on building agency, ensuring voices & choices and establishing partnerships & collaborations.</p>
                        <p style={{marginBottom:'30px'}}>Creating a positive impact on the ecosystem for front line workers, using a systems change approach to improve knowledge, skills and services. This is achieved through a platform that aggregates solutions and providers, ensuring that workers have access to the resources they need to thrive.</p>
                        <Row>
                            <Col md={7}>
                                <h2>Estd. 2022</h2><br /><br />
                                <h2>Our Reach:</h2><br /><br />
                                <Row>
                                    <Col md={6}>
                                        <ul>
                                            <li>5,07,670 Construction workers</li>
                                            <li>33,58,040 Women sex workers</li>
                                            <li>2,30,204 Factory workers</li>
                                            <li>4,53,522 Informal workers</li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul>
                                            <li>899 Healthcare providers</li>
                                            <li>30,03,585 Farmers</li>
                                            <li>3,06,811 Fisherfolk</li>
                                            <li>3,47,481 Street vendors</li>
                                        </ul>
                                    </Col>
                                </Row><br />
                                <h2>Approaches and Methods</h2>
                            </Col>
                            <Col md={5}>
                                <Row>
                                    <Col md={4}>
                                        <img src={Img31} alt="Unit 1" width={'80%'} height={'auto'} />
                                    </Col>
                                    <Col md={4}>
                                        <img src={Img32} alt="Unit 1" width={'80%'} height={'auto'} />
                                    </Col>
                                    <Col md={4}>
                                        <img src={Img33} alt="Unit 1" width={'80%'} height={'auto'} />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={4}>
                                        <img src={Img34} alt="Unit 1" width={'80%'} height={'auto'} />
                                    </Col>
                                    <Col md={4}>
                                        <img src={Img35} alt="Unit 1" width={'80%'} height={'auto'} />
                                    </Col>
                                    <Col md={4}>
                                        <img src={Img36} alt="Unit 1" width={'80%'} height={'auto'} />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={4}>
                                        <img src={Img37} alt="Unit 1" width={'80%'} height={'auto'} />
                                    </Col>
                                    <Col md={4}>
                                        <img src={Img38} alt="Unit 1" width={'80%'} height={'auto'} />
                                    </Col>
                                    <Col md={4}>
                                        <img src={Img39} alt="Unit 1" width={'80%'} height={'auto'} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br />
                        <Row className="redborderbox">
                            <Col md={4} style={{borderRight:'1px solid red'}}>
                                <img src={Fist} alt="Icon Fist" width={'auto'} height={'70px'} />
                                <h4>Workforce empowerment</h4><br /><br />
                                <ul>
                                    <li>Building voice &amp; agency</li>
                                    <li>Access to resources, products &amp; services</li>
                                    <li>Research &amp; evaluation</li>
                                </ul>
                            </Col>
                            <Col md={4} style={{borderRight:'1px solid red'}}>
                                <img src={Hands} alt="Icon Fist" width={'auto'} height={'70px'} />
                                <h4>Enabling safe &amp; inclusive systems</h4><br /><br />
                                <ul>
                                    <li>Strengthen workplace systems</li>
                                    <li>Aggregation of services &amp; solutions</li>
                                    <li>Building capacities &amp; perspectives</li>
                                </ul>
                            </Col>
                            <Col md={4}>
                                <img src={Palm} alt="Icon Fist" width={'auto'} height={'70px'} />
                                <h4>Collaborative, ecosystem-based &amp; worker-centric approach</h4><br /><br />
                                <ul>
                                    <li>Collaborations</li>
                                    <li>Partnerships</li>
                                    <li>Policy shaping</li>
                                    <li>Advocacy</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        )
    }
}