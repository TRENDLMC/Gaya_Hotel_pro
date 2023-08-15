import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Readreservation from "./reservation";
import Userinfo from "./useinfomation";

const Memberform = () => {
  const [resopne, setresopne] = useState(true);
  const [useropne, setuseropne] = useState(false);

  const resbutton = () => {
    setresopne(true);
    setuseropne(false);
  };
  const usebutton = () => {
    setresopne(false);
    setuseropne(true);
  };

  const boardstyle = {
    border: "5px solid",
    backgroundColor: "#c2a575",
    color: "black",
    fontSize: "20px",
    width: "15%",
    float: "left",
  };
  return (
    <div>
      {/* <div className="spacer" id="forms-component">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">마이 페이지</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Container style={boardstyle}>
        <Row>
          <Col>
            <hr />

            <hr />
          </Col>
          <Col>
            <hr />
          </Col>
        </Row>
        
      </Container> */}
      <Container>
        <Row>
          <Col md="3">
            <div
              nav
              inNavbar
              style={{ backgroundColor: "#8f103d", height: "100%" }}
            >
              <ul class="nav flex-column text-white w-100">
                <hr></hr>
                <li
                  href="#"
                  class="nav-link"
                  style={{ textAlign: "center", margin: "20px 0px 20px 0px" }}
                >
                  <span
                    style={{
                      fontSize: "45px",
                      color: "#c2a575",
                      fontWeight: "bold",
                    }}
                  >
                    MyPage
                  </span>
                </li>
                <hr></hr>
                <li href="#" class="nav-link">
                  <i class="bx bxs-dashboard"></i>
                  <input
                    type="button"
                    onClick={resbutton}
                    value={"예약조회/리뷰작성"}
                    style={{background:"#8f103d" ,border:" #8f103d",color:"#c2a575", fontSize:"24px", fontFamily:"Orbit"}}
                  />
                </li>
                <hr></hr>
                <li href="#" class="nav-link">
                  <i class="bx bx-user-check"></i>
                  <input
                    type="button"
                    onClick={usebutton}
                    value={"개인정보조회"}
                    style={{background:"#8f103d" ,border:" #8f103d",color:"#c2a575", fontSize:"24px", fontFamily:"Orbit"}}
                  />
                </li>
                <hr />
              </ul>
            </div>
          </Col>
          <Col>
            {resopne && <Readreservation />}
            {useropne && <Userinfo />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Memberform;
