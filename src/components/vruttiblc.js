import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import VruttiLogo from '../img/vrutiblclogo.png';
import Vrutti1 from '../img/vrutti1.png';
import Vrutti2 from '../img/vrutti2.png';
import Vrutti3 from '../img/vrutti3.png';
import Vrutti4 from '../img/vrutti4.png';

export default class VruttiBlock extends Component {
    render () {
        return (
            <Container fluid className="bg-black">
                
                <Container className="bg-vrutti">
                    <Row>
                        <Col md={6}>
                            <img src={VruttiLogo} alt="Vrutti Logo" width={160} height={'auto'} />
                        </Col>
                        <Col md={6} style={{textAlign:'right'}}>
                            <Button variant="success" href="https://vruttiimpactcatalysts.org/" target="_blank" rel="noopener noreferrer">Visit Site</Button>
                        </Col>
                    </Row>
                    <Container className="bg-white">
                        <Row>
                            <Col md={6}>
                                <h2>Livelihood Impact Partner </h2><br /><br />
                                <p><a href="https://vruttiimpactcatalysts.org/" target="_blank" rel="noopener noreferrer">Vrutti</a> is a centre for sustainable livelihoods and enhancing people&apos;s well-being through knowledge, innovation and transformative actions.</p><br />
                                <h2>Est. 2004</h2><br /><br />
                                <h2>Direct Reach:</h2><br /><br />
                                <ul>
                                    <li>53,500 smallholder producers; current year (2021-22) 42,500 intensive</li>
                                    <li>120,000 vulnerable women and transgenders</li>
                                    <li>25,000 artisanal fisherfolk</li>
                                    <li>9,000 MSMEs</li>
                                    <li>300 Nano women entrepreneurs</li>
                                </ul>
                                <p className="vruttibox">
                                “We aim to improve the wealth and resilience of small producers through innovative projects.”
                                </p>
                            </Col>
                            <Col md={3}>
                                <img src={Vrutti1} alt="Vrutti Icon 1" width={'auto'} height={120} className="imgalignmiddle" />
                                <h3>3Fold Model (CORE IMPACT MODEL)</h3>
                                <p>Building wealthy, resilient, and responsible farmers.</p><br /><br />
                                <img src={Vrutti3} alt="Vrutti Icon 3" width={'auto'} height={120} className="imgalignmiddle" />
                                <h3>V-Empower</h3>
                                <p>Enhancing growth, competitiveness, and sustainability of MSMEs and women-owned businesses.</p>
                            </Col>
                            <Col md={3}>
                                <img src={Vrutti2} alt="Vrutti Icon 2" width={'auto'} height={120} className="imgalignmiddle" />
                                <h3>V-Life (Secured Life &amp; Livelihoods)</h3>
                                <p>Financial and social security for the marginalised to reduce vulnerability.</p><br />
                                <img src={Vrutti4} alt="Vrutti Icon 4" width={'auto'} height={120} className="imgalignmiddle" />
                                <h3>FISHMARC</h3>
                                <p>Enhancing the wealth and resilience of artisanal fisherfolk and effective fishery resource management.</p>
                            </Col>
                        </Row>
                    </Container>
                    
                </Container>
            </Container>
        )
    }
}