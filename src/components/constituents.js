import React, {Component} from "react";
import { Container,Row, Col } from "react-bootstrap";

export class Constituents extends Component {
    render () {
        return (
            <div className="fp-constituents">
                <Container>
                    <h3>Our Constituents</h3>
                    <div className="frontpage-constituents-p">
                        <p>
                        Our constituents are the practitioners, thinkers and investors who are vested in social development, are aligned to our vision and strategy and subscribe to the same values, beliefs and standards that we stand for.
                        </p>
                        <p>
                        These constituents as individuals or institutions are our partners. We define partnerships through a variety of formal and informal engagement mechanisms. We are vested in working with partners, irrespective of the formality of engagement, and supporting them to move towards their results. Partnership forms include:
                        </p>
                    </div>
                    <div className="fp-constituents-div flex-row-wrap">
                        <Row>
                            <Col md={3}>
                                <div className="fp-constituents-single">
                                    <p>
                                    Institutions founded and managed by the CF Trustees, referred to as the Catalyst GRoup, having formal Memorandum of Association agreements
                                    </p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="fp-constituents-single">
                                    <p>
                                    Institutions integrated, merged into the Catalyst Group entities or managed by the CF Trustees
                                    </p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="fp-constituents-single">
                                    <p>
                                    Institutions co-created with other partners where the governance and management is legally represented by a Catalyst Group entity
                                    </p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="fp-constituents-single">
                                    <p>
                                    Institutions co-created or co-driven, where governance and management is trust led
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <div className="fp-constituents-single">
                                    <p>
                                    Build, Operate and Transfer mechanisms where only management, and not governance is represented by a Catalyst Group entity
                                    </p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="fp-constituents-single">
                                    <p>
                                    Long-term, formal or trust based support to institutions or initiatives
                                    </p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="fp-constituents-single">
                                    <p>
                                    Assignment or contract based engagements
                                    </p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="fp-constituents-single">
                                    <p>
                                    Are involved with us, and vice-versa, through voluntary association
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}
export default Constituents;