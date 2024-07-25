import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import logo from '../img/icf_logo_icon.svg';

export class ImpactBanner extends Component {
    render () {
        return (
            <Container fluid style={ { margin:0, padding:0 } } className="bgimg">
                <div className="fp-hero">
                    <div className="fp-hero-center">
                        <img src={logo} alt="Impact Global Logo" />
                        <p style={{maxWidth:'900px'}}>Impact Catalyst Foundation (ICF) is a US public charity that is part of the Catalyst Group of organisations, headquartered in India. The Catalyst Group was founded in 1994 and is a social enterprise platform focused on the promotion of the health and wealth of vulnerable communities. Our work has spanned over 25 countries across Asia and Africa in multiple domains, including health, livelihood, and climate change.</p>
                        <p style={{maxWidth:'900px'}}>ICF USA functions as a global platform for the Catalyst Group to engage more effectively with our partners while bringing critical development issues to the forefront of key decision-makers. We work closely with our partner organisations, such as Swasti (public health), Catalyst Management Services (social investments and solutions), Vrutti (livelihood), Green Foundation (regenerative agriculture), Fuzhio (impact marketing), and Upfront (wellbeing of workforces), to scale the impact of their work through catalytic collaborations and investments.</p>
                    </div>
                </div>
            </Container>
        )
    }
}
export default ImpactBanner;