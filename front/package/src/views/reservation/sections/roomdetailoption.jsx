import React, { useState, forwardRef } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

// const RoomOption = () => {
//   // 세션 스토리지 roomInfo

//   const SERVER_URL = "http://localhost:8095/";

//   // 방 정보 받기

//   const Row3Styles = {
//     border: "solid",
//   };

//   return (
//     <Container>
//       {/* 맨위로 올라갈수 있는 버튼이 항상 존재하게 */}
//       <Row>
//         <Col className="col-md" style={Row3Styles}>
//           옵션 내용
//         </Col>
//       </Row>
//     </Container>
//   );
// };

const RoomOption = forwardRef((props, ref) => {
  const Row3Styles = {
    border: "solid",
  };

  return (
    <section ref={(reviewRef) => (ref.current[2] = reviewRef)}>
      <Container>
        {/* 맨위로 올라갈수 있는 버튼이 항상 존재하게 */}
        <Row>
          <Col className="col-md" style={Row3Styles}>
            옵션 <br />
            상세 내용
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default RoomOption;
