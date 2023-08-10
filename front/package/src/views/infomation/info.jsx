import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Leftnavi from "./sections/infos.jsx";
import { Container,Row,Col } from "reactstrap";
//scss
import "../../assets/scss/userscss/leftnavi.scss";

const Information = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <Container>
                <Row>
                    <Col md="3" style={{border:"solid"}}>
                        <Leftnavi />
                    </Col>
                    <Col md="9" style={{border:"solid"}}>
                        내용 칸
                    </Col>
                </Row>
            </Container>
            <div className="page-wrapper">
                <div className="container-fluid">
                </div>
            </div>
            <Footer />
        </div>
    );
}

Information.propTypes = {
    classes: PropTypes.object
};

export default Information;