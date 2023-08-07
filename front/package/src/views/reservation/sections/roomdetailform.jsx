import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

const RoomDetail = () => {
  // 세션 스토리지 roomInfo
  const rooInfo = "";
  const SERVER_URL = "http://localhost:8095/";

  // 방리스트 페이지에서 받아온 방
  // 방번호로 리뷰와 방 정보 불러오기
  const [roomInfo, setRoomInfo] = useState({
    roomNum: "",
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
  // 방정보 받기
  const fetchRoomInfo = () => {
    // Read the token from the session storage
    // and include it to Authorization header

    // const token = sessionStorage.getItem("jwt");
    // data.? 로 데이터 불러옴

    fetch(SERVER_URL + "/reserv/detail", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roomInfo),
    })
      .then((response) => {
        if (response.ok) {
          // response length 만큼 조건문 실행해서 리스트 또는 제이슨에 저장 하던지 그냥 제이슨 쓰던지
        } else {
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 리뷰 리스트 정보 받기
  const fetchReviewList = () => {
    // Read the token from the session storage
    // and include it to Authorization header

    // const token = sessionStorage.getItem("jwt");
    // data.? 로 데이터 불러옴

    fetch(SERVER_URL + "/reserv/review", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roomInfo),
    })
      .then((response) => {
        if (response.ok) {
          // response length 만큼 조건문 실행해서 리스트 또는 제이슨에 저장 하던지 그냥 제이슨 쓰던지
        } else {
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 방 정보 받기

  // 결제 시 사용되는 fetch
  fetch(SERVER_URL + "/reserv/r", {
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

  const Row1Style = {
    height: "500px",
    width: "100%",
    border: "solid",
  };

  const InfoStyle = {
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
          <Col style={Row1Style} className="cl-md-6">
            <div>사진 칸</div>
          </Col>
          {/* 사용가능한 방 옵션 선택시 스트링으로 저장할수 있게 */}
          <Col className="cl-md-6" style={Row1Style}>
            <Container>
              <Row style={InfoStyle}>
                <Col style={InfoStyle}>방 번호</Col>
                <Col style={InfoStyle}>방 종류</Col>
              </Row>
              <Row style={InfoStyle}>
                <Col style={InfoStyle}>방 사이즈</Col>
                <Col style={InfoStyle}> 인원수 조정</Col>
              </Row>
              <Row style={InfoStyle}>
                <Col style={InfoStyle}>체크인 날짜</Col>
                <Col style={InfoStyle}>체크 아웃 날짜</Col>
              </Row>
              <Row style={InfoStyle}>
                <Col style={InfoStyle}>옵션 선택</Col>
              </Row>
              <Row style={InfoStyle}>
                <Col style={InfoStyle}>총 결제 금액 :</Col>
              </Row>
              <Row style={InfoStyle}>
                <Col style={InfoStyle}>예약하기</Col>
                <Col style={InfoStyle}>초기화</Col>
              </Row>
            </Container>
          </Col>
          {/* 예약 완료 버튼을 누르면 결제 모달창이 뜨게  */}
        </Row>
      </Container>
    </div>
  );
};

export default RoomDetail;
