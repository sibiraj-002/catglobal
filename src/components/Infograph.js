import React, { Component } from "react";
import { Container } from "react-bootstrap";
import img1 from "../img/Highcompressed_30743360.jpg";
import img2 from "../img/Highcompressed_30637766.jpg";
import img3 from "../img/circle-image3.jpg";
import img4 from "../img/Highcompressed_1256064279.jpeg";
import img5 from "../img/Highcompressed_51874103.jpg";

export class Infograph extends Component {
  render() {
    return (
      <div className="fp-about">
        <Container>
          <div className="fp-about-content">
            <div className="fp-about-circle-div">
              <div className="circle-image circle-image1">
                <img src={img1} alt="Infograph 1" width={600} height={600} />
              </div>
              <div className="circle-image circle-image2">
                <img src={img2} alt="Infograph 2" width={600} height={600} />
              </div>
              <div className="circle-image circle-image3">
                <img src={img3} alt="Infograph 3" width={600} height={600} />
              </div>
              <div className="circle-image circle-image4">
                <img src={img4} alt="Infograph 4" width={600} height={600} />
              </div>
              <div className="circle-image circle-image5">
                <img src={img5} alt="Infograph 5" width={600} height={600} />
              </div>
              <div className="circle-content" style={{ textAlign: "center" }}>
                <p>
                  Social inequities are growing and societal problems are
                  complex. No single approach can deliver results at a scale.
                  Sustainable change and transformation integrate the strength
                  of the community, efficiency of the market, the power of the
                  state and capacities of the facilitators. Sectoral systems of
                  agriculture, health, education, etc. fundamental to social
                  development, do not sufficiently focus or deliver outcomes for
                  the poor and vulnerable.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Infograph;
