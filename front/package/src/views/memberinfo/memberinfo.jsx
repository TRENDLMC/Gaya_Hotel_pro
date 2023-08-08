import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Memberform from "./sections/memberform.jsx";

const Memberinfo = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Memberform />
                </div>
            </div>
            <Footer />
        </div>
    );
}

Memberinfo.propTypes = {
    classes: PropTypes.object
};

export default Memberinfo;