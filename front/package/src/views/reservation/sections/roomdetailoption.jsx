import React, { useRef, forwardRef } from "react";
import { Container, Row, Col } from "reactstrap";

// const RoomContent = forwardRef((props, ref) => {
//   // 세션 스토리지 roomInfo

//   const SERVER_URL = "http://localhost:8095/";

const RoomContent = forwardRef((props, ref) => {
  const Row3Styles = {
    textAlign: "center",
    fontFamily: "Orbit",
    fontSize: "50px",
  };
  return (
    <section ref={(reviewRef) => (ref.current[1] = reviewRef)}>
      <Container>
        <hr />
        <Row style={{ margin: "80px 0 80px 0" }}>
          <Col></Col>
          <Col className="col-md" style={Row3Styles}>
            추가 옵션 소개
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col md="1"></Col>
          <Col></Col>
          <Col md="1"></Col>
        </Row>
      </Container>
    </section>
  );
});

export default RoomContent;
