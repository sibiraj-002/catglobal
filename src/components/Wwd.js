import React, {Component} from "react";
import { Container, Row, Col } from "react-bootstrap";

export class Wwd extends Component {
    render () {
        return (
            <div className="fp-wwd">
                <Container>
                    <h3>What we do</h3>
                    <div className="fp-wwd-div flex-row-wrap">
                        <Row>
                            <Col md={4}>
                                <div className="fp-wwd-single wow fadeInUp" data-wow-delay="200ms">
                                <h4>Thought leadership</h4>
                                <p>As thought leaders we build knowledge and
                                perspectives, and generate learning. Our multi- and
                                cross-disciplinary experience affords us the ability to
                                draw, process and share insights across themes and
                                sectors, enriching solutions through diverse lenses.</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="fp-wwd-single wow fadeInUp" data-wow-delay="400ms">
                                <h4>Build synergies</h4>
                                <p>We understand that transformation and scale is not
                                possible without partnerships and collaborations. We
                                bridge worlds of the communities, practitioners,
                                thinkers and investors; and of program and policy;
                                bringing these together for scale and sustainability</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="fp-wwd-single wow fadeInUp" data-wow-delay="600ms">
                                <h4>Catalyse action</h4>
                                <p>Ethics, integrity and execution excellence are the
                                pathways towards action that demonstrates quality
                                and dignity for communities. We provide mechanisms
                                to partners in the social sector to remain firmly on
                                these pathways.</p>
                                </div>
                            </Col>
                            
                        </Row>
                        
                    </div>
                </Container>
            </div>
        )
    }
}

export default Wwd;