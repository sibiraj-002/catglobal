import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Ecoimg from '../img/ecosystem.png';
import CTgroup from '../img/CTgroup.png';

export default class Ecosystem extends Component {
    render () {
        return (
            <Container fluid className="bg-black">
                <Container className="bg-catalyst">
                    <Container className="bg-white">
                        <img src={Ecoimg} alt="CT Ecosystem" width={'100%'} height={'auto'} /><br /><br />
                        <h3 style={{display:'inline', paddingRight:'30px'}}>Orchestrating change through</h3>
                        <h2>Change Agents</h2>
                        <img src={CTgroup} alt="CT Group" width={'100%'} height={'auto'} />
                    </Container>
                </Container>
            </Container>
        )
    }
}