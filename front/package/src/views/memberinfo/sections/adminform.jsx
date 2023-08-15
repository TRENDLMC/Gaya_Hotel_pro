import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Adminres from "./adminres";
import Admintable from "./adminnotice";
import Adminuserinfo from "./adminuserinfo";

const Adminform = () => {
  //아래내용들은 각 버튼을 눌렀을때 보여줘야할값들을 설정하기위해서 만든것
  const [resopne, setresopne] = useState(true);
  const [useropne, setuseropne] = useState(false);
  const [notice, setnotice] = useState(false);
  const resbtn = () => {
    setresopne(true);
    setuseropne(false);
    setnotice(false);
  };

  const usebtn = () => {
    setresopne(false);
    setuseropne(true);
    setnotice(false);
  };
  const noticebtn = () => {
    setresopne(false);
    setuseropne(false);
    setnotice(true);
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
      {/* {true면 값을 출력 false면 값을 출력하지않음.} */}
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
                    AdminPage
                  </span>
                </li>
                <hr></hr>
                <li href="#" class="nav-link">
                  <i class="bx bxs-dashboard"></i>
                  <input
                    type="button"
                    onClick={resbtn}
                    value={"예약정보조회"}
                    style={{background:"#8f103d" ,border:" #8f103d",color:"#c2a575", fontSize:"24px", fontFamily:"Orbit"}}
                  />
                </li>
                <hr></hr>
                <li href="#" class="nav-link">
                  <i class="bx bx-user-check"></i>
                  <input type="button" onClick={noticebtn} value={"공지사항"}
                    style={{background:"#8f103d" ,border:" #8f103d",color:"#c2a575", fontSize:"24px", fontFamily:"Orbit"}}

                  />
                </li>
                <hr />
                <li href="#" class="nav-link">
                  <i class="bx bx-conversation"></i>
                  <input type="button" onClick={usebtn} value={"회원조회"}
                    style={{background:"#8f103d" ,border:" #8f103d",color:"#c2a575", fontSize:"24px", fontFamily:"Orbit"}}

                  />
                </li>
                <hr></hr>
              </ul>
            </div>
          </Col>
          <Col>
            {resopne && <Adminres />}
            {useropne && <Adminuserinfo />}
            {notice && <Admintable />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Adminform;
