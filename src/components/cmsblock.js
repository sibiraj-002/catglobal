import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CMSlogo from '../img/CMS.png';
import Cmsimg from '../img/cms-block-img.png';
import Cms1 from '../img/cmsicon-1.png';
import Cms2 from '../img/cmsicon2.png';
import Cms3 from '../img/cmsicon3.png';

export default class CmsBlock extends Component {
    render () {
        return (
            <Container fluid className="bg-black">
                <Container className="bg-blue">
                    <Row>
                        <Col md={6}>
                            <img src={CMSlogo} alt="CMS Logo" width={120} height={'auto'} id="cms" />
                        </Col>
                        <Col md={6} style={{textAlign:'right'}}>
                            <Button href="https://cms.org.in/" target="_blank" rel="noopener noreferrer" style={{backgroundColor:'#80499D', border:'none'}}>Visit Site</Button>
                        </Col>
                    </Row>
                    <Container className="bg-white">
                        <Row>
                            <Col md={6}>
                                <h2>Solution &amp; Development</h2><br /><br />
                                <h2>Investment Firm</h2><br />
                                <p style={{marginTop:'30px'}}><a href="https://solvists.org" target="_blank" rel="noopener noreferrer">CMS</a> specialises in solving problems with change agents; through effective actions and growth solutions for scale, impact, and sustainability.  We are a global powerhouse that accelerates the Scale, Impact and Sustainability of change agents who affect SDGs.</p>
                                <p style={{marginTop:'30px', marginBottom:'30px'}}>At <a href="https://solvists.org" target="_blank" rel="noopener noreferrer">CMS</a>, we do not stop at temporary fixes; we are focused on providing  sustainable solutions  that create  scalable social impact. The world knows us as CMS, but at our core, we are ‘Solvists’.</p>
                                <h2>An Investment Reimagined Approach</h2>
                                <p style={{marginTop:'30px'}}>We like to see ourselves as Solution focused activists – ‘Solvists’. Working closely with partners, we incubate and invest with a rare mix of resources, deep expertise and on-ground experience, shaping social equity, working across SDG goals.</p>
                            </Col>
                            <Col md={6}>
                                <img src={Cmsimg} alt="CMS Initiatives" width={'90%'} height={'auto'} style={{display:'block'}} /><br /><br />
                                <h2 style={{marginLeft:'20px'}}>Est. 1994</h2>
                                <ul style={{marginTop:'20px'}}>
                                    <li>1000+ engagements</li>
                                    <li>500+ organizations in development mentored</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Container className="bg-blue">
                                    <img src={Cms1} alt="icon 1" width={'auto'} height={'80px'} className="imgalignmiddle" />
                                    <p><b>Co-Invest in success of key change agents</b></p>
                                    <p>Leverage resources for effective action while addressing complex issues.</p>
                                </Container>
                            </Col>
                            <Col md={4}>
                                <Container className="bg-blue">
                                    <img src={Cms2} alt="icon 2" width={'auto'} height={'80px'} className="imgalignmiddle" />
                                    <p><b>Raise and shape investments</b></p>
                                    <p>Secure higher value for investments made, through growth driven solutions.</p>
                                </Container>
                            </Col>
                            <Col md={4}>
                                <Container className="bg-blue">
                                    <img src={Cms3} alt="icon 3" width={'auto'} height={'80px'} className="imgalignmiddle" />
                                    <p><b>Invest in scalable solutions</b></p>
                                    <p>Incubate and scale sectoral solutions which deliver value and returns.</p>
                                </Container>
                            </Col>
                        </Row>
                        <p style={{textAlign:'center', marginTop:'12px', marginBottom:'12px'}}>This ‘Unlocking Value to Invest in Impact’ framework brings alive our living intelligence to enhance social equity.</p>
                        <video src="https://catalysts.global/wp-content/plugins/elementor/assets/images/placeholder.png" autoplay="on" loop="no" controls="yes" controlslist="nodownload" width={'100%'} height={'auto'}></video>
                    </Container>
                </Container>
            </Container>
        )
    }
}