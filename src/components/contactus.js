import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import blr from '../img/blr-office.jpg';
import delhi from '../img/dellhi-office.jpg';
import bhopal from '../img/bhopal-office.jpg';

export class Contactus extends Component {
    render () {
        return (
            <div className="footer-contactus">
                <Container>
                    <h3>Contact Us</h3>
                    <Row className="me-1">
                        <div className="footer-locations-div flex-row-wrap">
                            <Col md={4}>
                                <div className="footer-locations-single mx-auto">
                                    <img src={blr} alt="Bangalore Office" />
                                    <h5>Bangalore</h5>
                                    <p>No.25, AECS Layout, Ashwathnagar, Bengaluru - 560094, Karnataka,</p>
                                    <a href="https://goo.gl/maps/SA4WkU1RBgkRcMnd8" className="directions" target="blank"> Get Directions </a>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="footer-locations-single">
                                    <img src={delhi} alt="Delhi Office" />
                                    <h5>Delhi</h5>
                                    <p>Swasti Health Catalyst, A-10 (Second Floor), Green Park New Delhi-110016</p>
                                    <a href="https://goo.gl/maps/SeiB97CAc1vb267i8" className="directions" target="blank"> Get Directions </a>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="footer-locations-single">
                                    <img src={bhopal} alt="Bhopal Office" />
                                    <h5>Bhopal</h5>
                                    <p>E-2/244, First Floor, Arera Colony, Bhopal, Madhya Pradesh, 462016</p>
                                    <a href="https://goo.gl/maps/SeiB97CAc1vb267i8" className="directions" target="blank"> Get Directions </a>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Contactus;