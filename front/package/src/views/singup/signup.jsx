import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
// sections for this page
import Signupform from "./sections/signupform.jsx";

const Signup = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Signupform />
                </div>
            </div>
            <Footer />
        </div>
    );
}

Signup.propTypes = {
    classes: PropTypes.object
};

export default Signup;