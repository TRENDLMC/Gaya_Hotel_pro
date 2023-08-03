import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import RoomDetail from './sections/roomdetailform.jsx';

const Reservation = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                  <RoomDetail />
                </div>
            </div>
            <Footer />
        </div>
    );
}

Reservation.propTypes = {
    classes: PropTypes.object
};

export default Reservation;