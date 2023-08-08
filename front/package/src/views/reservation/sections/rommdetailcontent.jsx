import React, { useRef, forwardRef } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

// const RoomContent = forwardRef((props, ref) => {
//   // 세션 스토리지 roomInfo

//   const SERVER_URL = "http://localhost:8095/";

const RoomContent = forwardRef((props, ref) => {
  const Row3Styles = {
    border: "solid",
  };
  return (
    <section ref={(reviewRef) => (ref.current[0] = reviewRef)}>
      <Container>
        {/* 맨위로 올라갈수 있는 버튼이 항상 존재하게 */}
        <Row>
          <Col className="col-md" style={Row3Styles}>
            방 소개 <br />
            상세 내용
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default RoomContent;
