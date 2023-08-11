import React, { useRef } from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import RoomDetail from "./sections/roomdetailform.jsx";
import RoomNavi from "./sections/roomdetailnavi.jsx";
import RoomContent from "./sections/rommdetailcontent.jsx";
import RoomOption from "./sections/roomdetailoption.jsx";
import ReviewList from "./sections/roomdetailreview.jsx";

const Reservation = () => {
  const scrollRef = useRef([]); // 배열 ref를 하나 생성한다.

  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <RoomDetail />
          <RoomNavi scrollRef={scrollRef} />
          <RoomContent ref={scrollRef} />
          <RoomOption ref={scrollRef} />
          <ReviewList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

Reservation.propTypes = {
  classes: PropTypes.object,
};

export default Reservation;
