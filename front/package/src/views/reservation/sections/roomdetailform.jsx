import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

const RoomDetail = () => {
  const [roomInfo, setRoomInfo] = useState({
    roomNum: "",
    roomSize: "",
    tmp_checkin: "",
    tmp_checkout: "",
  });

  const [review, setReview] = useState({
    review_num: "",
    content: "",
    starpoint: "",
    id: "",
  });

  const Row1Styles = {
    height: "500px",
    width: "100%",
    border: "solid",
  };

  const Row2Styles = {
    height: "100px",
    // width: "100%",
    border: "solid",
  };

  const Row3Styles = {
    // width: "100%",
    border: "solid",
  };

  return (
    <div>
      <div className="spacer" id="forms-component">
        <Container>
          <Row>
            <Col md="12">
              <div className="col-md-8 ">sdfsdfsdf</div>
              <h1 className="title font-bold col-md-12">상세 정보 페이지</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col style={Row1Styles} className="cl-md-6">
            <div>사진 칸</div>
          </Col>
          <Col className="cl-md-6" style={Row1Styles}>
            <div>정보 칸</div>
          </Col>
        </Row>
        <Row>
          <Col className="col-md-4" style={Row2Styles}>
            Navi 1
          </Col>
          <Col className="col-md-4" style={Row2Styles}>
            Navi 2
          </Col>
          <Col className="col-md-4" style={Row2Styles}>
            Navi 3
          </Col>
        </Row>
        <Row>
          <Col className="col-md" style={Row3Styles}>
            내용
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RoomDetail;
