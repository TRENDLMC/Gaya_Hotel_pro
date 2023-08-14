import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Adminprice from "./adminprice";

const Adminres = () => {
  const [totReservation, setReservation] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_LOCAL + "/admin/reservation");
      const data = await response.json();
      setReservation(data);
    } catch (error) {
      console.error("Error fetching reservation data:", error);
    }
  }

  const renderOptionColumns = (options) => {
    return Object.keys(options)
      .filter((key) => key.startsWith("imt"))
      .map((optionKey) => (
        <Col key={optionKey}>{options[optionKey].option_content}</Col>
      ));
  };

  const RenderReservationRows = () => {
    if (totReservation.length > 0) {
      return totReservation.map((Res, index) => (
        <Row key={index}>
          <Col>{Res.res_num.reservation_num}</Col>
          <Col>
            {Res.res_num.id.id}
            <br />
            {Res.res_num.order_id}
          </Col>
          <Col>
            {Res.res_num.r_num.r_num}
            <br />
            {Res.res_num.r_num.r_type}
          </Col>
          <Col>
            {new Date(Res.res_num.check_in).toLocaleDateString()}
            <br />~ {new Date(Res.res_num.check_out).toLocaleDateString()}
          </Col>
          {renderOptionColumns(Res)}
          <Col>{Res.res_num.total_price}</Col>
        </Row>
      ));
    } else {
      return (
        <Row>
          <Col></Col>
          <Col>예약된 내역이 없습니다.</Col>
          <Col></Col>
        </Row>
      );
    }
  };

  return (
    <>
      <Container style={{ marginBottom: "200px" }}>
        <Row>
          <Col>예약내역</Col>
        </Row>
        <hr />
        <Row>
          <Col>예약번호</Col>
          {/* 아이디랑 order_idZ */}
          <Col>예약정보</Col>
          <Col>방 정보</Col>
          <Col>입퇴실날짜</Col>
          <Col>옵션</Col>
          <Col>총결제금액</Col>
        </Row>
        <hr />
        <br />
        <RenderReservationRows />
        <hr />
        <Adminprice />
      </Container>
    </>
  );
};

export default Adminres;
