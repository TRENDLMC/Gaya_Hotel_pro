import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import logo2 from "../../assets/images/logos/gaya.png";

const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <img src={logo2} />
                        <h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
