import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import team from '../img/icon-team.png';
import city from '../img/icon-city.png';
import work from '../img/icon-work.png';
import hand from '../img/icon-handshake.png';

export class Fpdetails extends Component {
    render () {
        return (
            <div className="fp-details">
                <Container>
                    <h3>How Big Are We?</h3>
                    <p className="frontpage-details-p">
                    Philosophically and strategically, Catalyst Group would like to stay small and make a big impact. We are not focused on our size, rather the size of our contributions. Therefore we prefer to measure and be measured on this count.
                    </p>
                    <Row>
                        <div className="fp-details-div flex-row-wrap">
                            <Col md={3}>
                                <div className="fp-details-single">
                                    <div className="fp-detail-img">
                                        <img src={team} alt="Team" />
                                    </div>
                                    <p>We are a 480+ strong team…</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="fp-details-single">
                                    <div className="fp-detail-img">
                                        <img src={city} alt="City" />
                                    </div>
                                    <p>…with a Head Office in Bangalore…</p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="fp-details-single">
                                <div className="fp-detail-img">
                                    <img src={work} alt="Work" />
                                </div>
                                <p>… regional offices in Delhi, and Bhopal…</p>
                            </div>
                            </Col>
                            <Col md={3}>
                                <div className="fp-details-single">
                                    <div className="fp-detail-img">
                                        <img src={hand} alt="Hand" />
                                    </div>
                                    <p>…with over 100+ partners across the globe.</p>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Fpdetails;