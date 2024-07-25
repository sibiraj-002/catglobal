import React, { Component } from "react";
import { Container } from "react-bootstrap";

export class Mainfooter extends Component {

    render () {
        return (
            <div>
            {/* Desktop Footer */}
            <div className="d-lg-block d-none main-footer">
                <Container>
                    <p>
                        &copy; {(new Date().getFullYear())} Catalysts Foundation - All Rights Reserved | Terms &amp; Conditions | Disclaimer
                    </p>
                </Container>
            </div>

            {/* Mobile Footer */}
            <div className="d-block d-lg-none main-footer">
                <Container>
                    <p>
                        &copy; {(new Date().getFullYear())} Catalysts Foundation <br />All Rights Reserved | Terms &amp; Conditions | Disclaimer
                    </p>
                </Container>
            </div>
        </div>
        )
    }
}
export default Mainfooter;