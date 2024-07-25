import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import CMSlogo from '../img/CMS.png';
import Swasti from '../img/swasti-logo.png';
import Vrutti from '../img/vrutti-logo.png';
import Fuzhio from '../img/logo-fuzhio.png';
import Green from '../img/Green_foundation_logo.png';
import Catalyst from '../img/cglogo-black.png';
import Upfront from '../img/Upfront.png';
import Commnty from '../img/CAC-logo-02.png';

export class OverviewBanner extends Component {
    render () {
        return (
            <Container fluid style={ { margin:0, padding:0 } }>
                <div className="overview-banner">
                    <div className="fp-hero-center">
                        <h2>THE CATALYST GROUP</h2>
                        <p>Complex societal issues need integrated and collaborative solutions. At Catalyst, we innovate, influence, design solutions and support development actors to accelerate social impact and to scale and achieve significant impact.</p>
                        <Container>
                            <div className="whitelogobox">
                                <a href="https://cms.org.in">
                                    <img src={CMSlogo} alt="CMS Logo" width={'auto'} height={'40px'} style={{ marginLeft: '20px' }} />
                                </a>
                                <a href="https://swastihc.org">
                                    <img src={Swasti} alt="Swasti Logo" width={'auto'} height={'60px'} style={{ marginLeft:'30px' }} />
                                </a>
                                <a href="https://vruttiimpactcatalysts.org/">
                                    <img src={Vrutti} alt="Vrutti Logo" width={'auto'} height={'50px'} style={{marginLeft: '30px'}} />
                                </a>
                                <a href="https://fuzhio.org">
                                    <img src={Fuzhio} alt="Fuzhio Logo" width={'auto'} height={'60px'} style={{marginLeft: '30px'}} />
                                </a>
                                <a href="https://greenfoundation.in">
                                    <img src={Green} alt="Greenfoundation Logo" width={'auto'} height={'40px'} style={{marginLeft: '30px'}} />
                                </a>
                                <a href="https://catalysts.global">
                                    <img src={Catalyst} alt="Catalyst Global Logo" width={'auto'} height={'40px'} style={{marginLeft: '30px'}} />
                                </a>
                                <a href="https://upfront.global">
                                    <img src={Upfront} alt="Upfront Logo" width={'auto'} height={'100px'} style={{marginLeft: '20px'}} />
                                </a>
                                <a href="https://communityactioncollab.org">
                                    <img src={Commnty} alt="Community Logo" width={'auto'} height={'100px'} style={{marginLeft: '20px'}} />
                                </a>
                            </div>
                        </Container>
                    </div>
                </div>
            </Container>
        )
    }
}
export default OverviewBanner;