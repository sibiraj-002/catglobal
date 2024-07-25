import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CGlogo from '../img/cglogo-black.png';
import CTposter from '../img/cat-poster.png';
import CTinfo from '../img/CT-info.png';

export default class CatalystBlock extends Component {
    render () {
        return (
            <Container fluid className="bg-black">
                <Container className="bg-catalyst">
                    <Row>
                        <Col md={6}>
                            <img src={CGlogo} alt="Upfront Logo" height={70} width={'auto'} />
                        </Col>
                        <Col md={6} style={{textAlign:'right'}}>
                            <Button href="https://catalysts.global" target="_blank" style={{backgroundColor:'#191D42',border:'none'}} rel="noopener noreferrer">Visit Site</Button>
                        </Col>
                    </Row>
                    <Container className="bg-white">
                        <Row>
                            <Col md={6}>
                                <p>A social enterprise platform that promotes the health and wealth of vulnerable communities. A treasure trove of experiences and stories of change and impact. Our strategy framework entails thought leadership, building synergy, and</p><br />
                                <h2>Estd. 2016</h2>
                            </Col>
                            <Col md={6} style={{textAlign:'right'}}>
                                <img src={CTposter} alt="CA Poster" width={'70%'} height={'auto'} />
                            </Col>
                        </Row>
                        <img src={CTinfo} alt="Catalysts Info" width={'90%'} height={'auto'} className="imgalignmiddle" />
                    </Container>
                </Container>
            </Container>
        )
    }
}