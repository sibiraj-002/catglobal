import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FuzhioLogo from '../img/Fuzhioi-logo-1.png';
import FuzhioImg from '../img/fuzhioimg.png';

export default class FuzhioBlock extends Component {
    render () {
        return (
            <Container fluid className="bg-black">
                <Container className="bg-fuzhio">
                    <Row>
                        <Col md={6}>
                            <img src={FuzhioLogo} alt="Fuzhio Logo" height={80} width={'auto'} />
                        </Col>
                        <Col md={6} style={{textAlign:'right'}}>
                            <Button href="https://fuzhio.org/" target="_blank" style={{backgroundColor:'#6E180C',border:'none'}} rel="noopener noreferrer">Visit Site</Button>
                        </Col>
                    </Row>
                    <Container className="bg-white">
                        <h2 style={{display:'block'}}>Impact Product Marketing Firm</h2>
                        <Row>
                            <Col md={6}>
                                <p style={{paddingTop:'20px'}}><a href="https://fuzhio.org" target="_blank" rel="noopener noreferrer">Fuzhio</a> deals with ‘Impact Products’ for the people, planet, and prosperity. We facilitate market access to women and small-holder farmers and marginalised communities to maximise returns for their products and services; and engage in an eco-social circular economy initiative focused on plastic repurposing, recycling, and community empowerment.</p><br />
                                <h2>Est. 2005</h2><br /><br />
                                <h2>Impacts:</h2><br /><br />
                                <ul>
                                    <li>30 Farmer Producer Organizations</li>
                                    <li>1 brand for hanger recycling</li>
                                    <li>Sale of products: Over 50 products</li>
                                </ul><br />
                                <h2>Agriculture Products:</h2><br /><br />
                                <ul>
                                    <li>Increasing the value realised by producers</li>
                                    <li>Farm advisory and Financing, Product design, Peer group formation</li>
                                    <li>Institutional development, Product aggregation, Financing</li>
                                    <li>FPOs/EG based processing units, business planning and financing</li>
                                    <li>Market research, Strategy, Testing, and Customer Relationship Management</li>
                                </ul>
                            </Col>
                            <Col md={6}>
                                <img src={FuzhioImg} alt="Fuzhio Info" width={'100%'} height={'auto'} style={{marginTop:'-40px'}} />
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        )
    }
}