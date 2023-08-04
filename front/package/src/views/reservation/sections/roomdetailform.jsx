import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

const RoomDetail = () => {
  const SERVER_URL = "http://localhost:8095/";
  // 방리스트 페이지에서 받아온 방정보
  const [roomInfo, setRoomInfo] = useState({
    roomNum: "",
    roomSize: "",
    tmp_checkin: "",
    tmp_checkout: "",
  });
  // 리뷰 리스트 출력시 필요한 정보 객체
  const [reviewList, setReviewList] = useState({
    review_num: "",
    content: "",
    starpoint: "",
    id: "",
  });

  // 결제 시 필요한 정보 객체
  const [paymentInfo, setPaymentInfo] = useState({
    id: "",
    roomNum: "",
    tmp_checkin: "",
    tmp_checkout: "",
    options: "",
    total_pay: "",
  });

  // 리뷰 리스트 정보 받기
  const fetchReviews = () => {
    // Read the token from the session storage
    // and include it to Authorization header

    // const token = sessionStorage.getItem("jwt");
    // data.? 로 데이터 불러옴
    fetch(SERVER_URL + "?")
      .then((response) => response.json())
      .then((data) => setRoomInfo(data))
      .catch((err) => console.error(err));
  };

  // 방 정보 받기

  // 결제 시 사용되는 fetch
  fetch("http://localhost:8095/?/?", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(paymentInfo),
  })
    .then((response) => {
      if (response.ok) {
      } else {
      }
    })
    .catch((err) => {
      console.error(err);
    });

  const Row1Styles = {
    height: "500px",
    width: "100%",
    border: "solid",
  };

  const Row2Styles = {
    height: "100px",
    border: "solid",
  };

  const Row3Styles = {
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
