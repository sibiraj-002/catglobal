import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CAcollabLogo from '../img/collablogo.png';
import CAgroup from '../img/collabgroup.png';
import CACiconl1 from '../img/caciconl1.svg';
import iconl2 from '../img/caciconl2.svg';
import iconl3 from '../img/caciconl3.svg';
import iconl4 from '../img/caciconl4.svg';
import iconr1 from '../img/caciconr1.svg';
import iconr2 from '../img/caciconr2.svg';
import iconr3 from '../img/caciconr3.svg';

export default class CACollab extends Component {
    render () {
        return (
            <Container fluid className="bg-black">
                <Container className="bg-cacollab">
                    <Row>
                        <Col md={6}>
                            <img src={CAcollabLogo} alt="CAS Logo" width={220} height={'auto'} />
                        </Col>
                        <Col md={6} style={{textAlign:'right'}}>
                            <Button variant="primary" href="https://communityactioncollab.org/" target="_blank" rel="noopener noreferrer">Visit Site</Button>
                        </Col>
                    </Row>
                    <Container className="bg-white">
                        <Row>
                            <Col md={6}>
                                <p>A dynamic humanitarian emergency platform that builds the resilience of vulnerable people and their institutions in everyday emergencies and makes them resilient over humanitarian crises.</p>
                                <p>Building on the legacy of #COVIDActionCollab, Community Action Collab works to coordinate and guide the actions and decisions of its partners, the government and other alliances. CAC also addresses issues affecting millions of vulnerable people and ensures these individuals have access to vital livelihood, health, social protection and climate impact solutions.</p><br />
                                <h2>Estd. 2022</h2><br /><br />
                                <h2>Our Reach:</h2>
                                <ul>
                                    <li><img src={CACiconl1} alt="Icon 1" width={'60px'} height={'auto'} /> 13 Vulnerable communities</li>
                                    <li><img src={iconl2} alt="Icon 1" width={'60px'} height={'auto'} /> 36 States &amp; Union Territories</li>
                                    <li><img src={iconl3} alt="Icon 1" width={'60px'} height={'auto'} /> 360+ Partners</li>
                                    <li><img src={iconl4} alt="Icon 1" width={'60px'} height={'auto'} /> 2.79 Cr Service instances</li>
                                </ul>
                            </Col>
                            <Col md={6} className="cacright">
                                <div className="contentbox">
                                    <img src={CAgroup} alt="CA Group" width={'100%'} height={'auto'} className="imgalignmiddle" /><br />
                                    <Row>
                                        <Col md={3}>
                                            <img src={iconr1} alt="Icon 4" width={'80px'} height={'auto'} style={{marginLeft:'20px'}} />
                                        </Col>
                                        <Col md={9}>
                                            <p>
                                                <h4>Orchestrate</h4>
                                                Functional governance systems that actively meet the needs of the vulnerable and enable human capital for emergency response.
                                            </p>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col md={3}>
                                            <img src={iconr2} alt="Icon 4" width={'80px'} height={'auto'} style={{marginLeft:'20px'}} />
                                        </Col>
                                        <Col md={9}>
                                            <p>
                                                <h4>Influence</h4>
                                                Significant policy and practise changes, achieved through global collaboration by amplifying components/issues.
                                            </p>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col md={3}>
                                            <img src={iconr3} alt="Icon 4" width={'80px'} height={'auto'} style={{marginLeft:'20px'}} />
                                        </Col>
                                        <Col md={9}>
                                            <p>
                                                <h4>Solve</h4>
                                                Scalable solutions, response time and district level integrated action.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                                
                            </Col>
                        </Row>
                    </Container>
                </Container>
                    <div className="footblock">
                        <a href="mailto:contactus@catalysts.org">contactus@catalysts.org</a>
                    </div>
            </Container>
        )
    }
}