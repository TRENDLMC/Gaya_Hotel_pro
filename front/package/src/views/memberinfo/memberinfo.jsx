import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Memberform from "./sections/memberform.jsx";
import Adminform from "./sections/adminform.jsx";



const Info = () => {
    if (sessionStorage.getItem("grade") !== "1") {
        return (
            <Memberform />
        )
    } else {
        return (
            <Adminform />
        )
    }
}

const Memberinfo = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Info />
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