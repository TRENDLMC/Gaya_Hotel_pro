import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
// sections for this page
import Roomlistview from "./sections/roomlistviewform.jsx";

const Roomlist = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Roomlistview />
                </div>
            </div>
            <Footer />
        </div>
    );
}

Roomlist.propTypes = {
    classes: PropTypes.object
};

export default Roomlist;