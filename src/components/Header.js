import React, { Component } from "react";
import logo from '../img/catalyst-global-logo.svg';

export class Header extends Component {
    render () {
        return (
            <div className="container-fluid App-logo">
                <div className="container">
                    <img src={logo} className="App-logo" alt="Catalyst Global Logo" />
                </div>
            </div>
        )
    }
}
export default Header;