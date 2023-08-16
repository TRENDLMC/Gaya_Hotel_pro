import React from "react";
import { Container, Row, Col } from "reactstrap";

import logo2 from "../../assets/images/logos/gaya.png";

const HeaderBanner = () => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <img src={logo2} />
            <h4
              className="subtitle font-light"
              style={{ marginTop: "13px", fontSize: "25px" }}
            >
              The best gift for you tired
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBanner;
