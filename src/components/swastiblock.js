import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SwastiLogo from '../img/swastilogored.png';
import SwPoster from '../img/swastiposter.png';
import SwInfo from '../img/swasti-info.png';

export default class SwastiBlock extends Component {
    render () {
        return (
            <Container fluid className="bg-black">
                <Container className="bg-swasti">
                    <Row>
                        <Col md={6}>
                            <img src={SwastiLogo} alt="Swasti Logo" width={'240px'} height={'auto'} />
                        </Col>
                        <Col md={6} style={{textAlign:'right'}}>
                            <Button href="https://swasti.org/" target="_blank" style={{backgroundColor:'#ED0C6E', border:'none'}} rel="noopener noreferrer">Visit Site</Button>
                        </Col>
                    </Row>
                    <Container className="bg-white">
                        <Row>
                            <Col md={6}>
                                <p><a href="https://swasti.org" target="_blank" rel="noopener noreferrer">Swasti</a> focuses on empowering people and communities, particularly the poor and marginalised, to make the right choices and lead healthy lives.</p>
                                <p>We integrate the capacities of people and their institutions, thematic expertise, and cross-sectoral collaborations. We aim to make everyday well-being real for the most poor and marginalised communities.</p><br />
                                <h2>Est. 2002</h2><br /><br />
                                <h2>Direct Reach:</h2><br /><br />
                                <p>400,000+  poor and vulnerable people  in India and 29 other countries</p>
                            </Col>
                            <Col md={6}>
                                <img src={SwPoster} alt="Swasti Poster" width={360} height={'auto'} className="imgalignmiddle" style={{marginBottom:'30px'}} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <img src={SwInfo} alt="Swasti Info" width={400} height={'auto'} />
                            </Col>
                            <Col md={6}>
                                <p style={{marginBottom:'80px'}}><strong>– Demonstrate: Making models that work for different communities</strong><br />What is possible, at a minimum viable scale.</p>
                                <p style={{marginBottom:'80px'}}><strong>– Take Evidence to Action: Support impact at scale</strong><br />Work with local, regional and global organizations to support the achievement of well-being, through implementation support, research, monitoring & evaluation, program design, etc.</p>
                                <p><strong>– Influence the Global Well-being Narrative:</strong><br />Work closely with governments/partners within and outside of India, through collaborative action (joint implementation) and using evidence for communication, influence policies and their implementation related to primary care.</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        )
    }
}