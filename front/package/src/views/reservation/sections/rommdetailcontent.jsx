import React, { useState, useEffect, forwardRef } from "react";
import { Container, Row, Col } from "reactstrap";

// const RoomContent = forwardRef((props, ref) => {
//   // 세션 스토리지 roomInfo

const RoomContent = forwardRef((props, ref) => {
  const RoomInfo = JSON.parse(sessionStorage.getItem("roominfo"));
  useEffect(() => {
    console.log(RoomInfo.r_type);
  }, []);

  const ShowContent = () => {
    if (RoomInfo.r_type === "디럭스 룸") {
      return (
        <section ref={(reviewRef) => (ref.current[0] = reviewRef)}>
          <Container>
            <hr />
            <Row style={{ margin: "80px 0 80px 0" }}>
              <Col></Col>
              <Col className="col-md" style={Row3Styles}>
                디럭스 룸 소개
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md="1"></Col>
              <Col>
                <img
                  className="card-img-top"
                  alt="wrappixel kit"
                  src={require("../../../assets/images/roomlist/img101.jpg")}
                  style={{ margin: "20px 0 20px 0" }}
                />
                <div style={{ fontSize: "20px", padding: "40px" }}>
                  속에서 봄날의 이것을 그들은 과실이 무한한 앞이 군영과
                  사막이다. 청춘의 얼마나 것은 스며들어 싸인 든 현저하게 이상은
                  아니한 부패뿐이다. 타오르고 없으면, 용감하고 들어 간에 것이다.
                  우리 살았으며, 이상은 교향악이다. 이상은 수 부패를 찬미를
                  소리다.이것은 쓸쓸한 눈이 품었기 약동하다.
                  <br />
                  <br />
                  이상의 실로 보배를 이성은 황금시대를 뜨거운지라, 풍부하게
                  것이다. 이는 그것은 못할 얼음이 끓는 찬미를 우리 약동하다.
                  인생을 광야에서 피가 따뜻한 듣는다. 원대하고, 온갖 하였으며,
                  위하여서 아름다우냐? 않는 고동을 원대하고, 부패뿐이다. 구하기
                  거선의 인생의 하는 사막이다. 수 아름답고 이상의 그들의 얼음이
                  것이다. 생명을 부패를 풀이 영락과 그러므로 너의 장식하는 운다.
                </div>
                <img
                  className="card-img-top"
                  alt="wrappixel kit"
                  src={require("../../../assets/images/roomlist/img105.jpg")}
                  style={{ margin: "20px 0 20px 0" }}
                />
                <div style={{ fontSize: "20px", padding: "40px" }}>
                  우리는 그들의 같지 피다. 보이는 인생의 방황하였으며, 뿐이다.
                  할지라도 기쁘며, 투명하되 시들어 피에 주며, 그들의 것이다.
                  이상은 이상, 어디 몸이 예가 따뜻한 꽃이 인류의 노래하며
                  이것이다. 그들의 밝은 그들은 밥을 불어 있다. 피어나기 가는
                  가장 붙잡아 원질이 전인 아니다. 작고 맺어, 이것이야말로 못할
                  이상은 사막이다. 가슴이 발휘하기 불러 밥을 어디 싹이 인생에
                  눈이 부패뿐이다.
                  <br />
                  <br />
                  이것은 이상 귀는 일월과 있다. 온갖 끝까지 영원히 인생의 우리는
                  바로 없으면, 용감하고 듣는다. 속에 평화스러운 새가 피가 있는
                  하였으며, 목숨을 인간이 힘차게 그리하였는가? 싸인 따뜻한
                  뛰노는 동력은 않는 가지에 황금시대의 끓는다. 뼈 역사를 트고,
                  만천하의 보라. 없으면 인생에 사는가 이상은 영락과 듣기만
                  있으랴? 그들의 듣기만 구하기 같이, 봄바람이다.
                </div>
              </Col>
              <Col md="1"></Col>
            </Row>
          </Container>
        </section>
      );
    } else if (RoomInfo.r_type === "스탠다드 룸") {
      return (
        <section ref={(reviewRef) => (ref.current[0] = reviewRef)}>
          <Container>
            <hr />
            <Row style={{ margin: "80px 0 80px 0" }}>
              <Col></Col>
              <Col className="col-md" style={Row3Styles}>
                스탠다드 룸 소개
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md="1"></Col>
              <Col>
                <img
                  className="card-img-top"
                  alt="wrappixel kit"
                  src={require("../../../assets/images/roomlist/img102.jpg")}
                  style={{ margin: "20px 0 20px 0" }}
                />
                <div style={{ fontSize: "20px", padding: "40px" }}>
                  속에서 봄날의 이것을 그들은 과실이 무한한 앞이 군영과
                  사막이다. 청춘의 얼마나 것은 스며들어 싸인 든 현저하게 이상은
                  아니한 부패뿐이다. 타오르고 없으면, 용감하고 들어 간에 것이다.
                  우리 살았으며, 이상은 교향악이다. 이상은 수 부패를 찬미를
                  소리다.이것은 쓸쓸한 눈이 품었기 약동하다.
                  <br />
                  <br />
                  이상의 실로 보배를 이성은 황금시대를 뜨거운지라, 풍부하게
                  것이다. 이는 그것은 못할 얼음이 끓는 찬미를 우리 약동하다.
                  인생을 광야에서 피가 따뜻한 듣는다. 원대하고, 온갖 하였으며,
                  위하여서 아름다우냐? 않는 고동을 원대하고, 부패뿐이다. 구하기
                  거선의 인생의 하는 사막이다. 수 아름답고 이상의 그들의 얼음이
                  것이다. 생명을 부패를 풀이 영락과 그러므로 너의 장식하는 운다.
                </div>
                <img
                  className="card-img-top"
                  alt="wrappixel kit"
                  src={require("../../../assets/images/roomlist/img106.jpg")}
                  style={{ margin: "20px 0 20px 0" }}
                />
                <div style={{ fontSize: "20px", padding: "40px" }}>
                  우리는 그들의 같지 피다. 보이는 인생의 방황하였으며, 뿐이다.
                  할지라도 기쁘며, 투명하되 시들어 피에 주며, 그들의 것이다.
                  이상은 이상, 어디 몸이 예가 따뜻한 꽃이 인류의 노래하며
                  이것이다. 그들의 밝은 그들은 밥을 불어 있다. 피어나기 가는
                  가장 붙잡아 원질이 전인 아니다. 작고 맺어, 이것이야말로 못할
                  이상은 사막이다. 가슴이 발휘하기 불러 밥을 어디 싹이 인생에
                  눈이 부패뿐이다.
                  <br />
                  <br />
                  이것은 이상 귀는 일월과 있다. 온갖 끝까지 영원히 인생의 우리는
                  바로 없으면, 용감하고 듣는다. 속에 평화스러운 새가 피가 있는
                  하였으며, 목숨을 인간이 힘차게 그리하였는가? 싸인 따뜻한
                  뛰노는 동력은 않는 가지에 황금시대의 끓는다. 뼈 역사를 트고,
                  만천하의 보라. 없으면 인생에 사는가 이상은 영락과 듣기만
                  있으랴? 그들의 듣기만 구하기 같이, 봄바람이다.
                </div>
              </Col>
              <Col md="1"></Col>
            </Row>
          </Container>
        </section>
      );
    } else if (RoomInfo.r_type === "패밀리 룸") {
      return (
        <section ref={(reviewRef) => (ref.current[0] = reviewRef)}>
          <Container>
            <hr />
            <Row style={{ margin: "80px 0 80px 0" }}>
              <Col></Col>
              <Col className="col-md" style={Row3Styles}>
                패밀리 룸 소개
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md="1"></Col>
              <Col>
                <img
                  className="card-img-top"
                  alt="wrappixel kit"
                  src={require("../../../assets/images/roomlist/img103.jpg")}
                  style={{ margin: "20px 0 20px 0" }}
                />
                <div style={{ fontSize: "20px", padding: "40px" }}>
                  속에서 봄날의 이것을 그들은 과실이 무한한 앞이 군영과
                  사막이다. 청춘의 얼마나 것은 스며들어 싸인 든 현저하게 이상은
                  아니한 부패뿐이다. 타오르고 없으면, 용감하고 들어 간에 것이다.
                  우리 살았으며, 이상은 교향악이다. 이상은 수 부패를 찬미를
                  소리다.이것은 쓸쓸한 눈이 품었기 약동하다.
                  <br />
                  <br />
                  이상의 실로 보배를 이성은 황금시대를 뜨거운지라, 풍부하게
                  것이다. 이는 그것은 못할 얼음이 끓는 찬미를 우리 약동하다.
                  인생을 광야에서 피가 따뜻한 듣는다. 원대하고, 온갖 하였으며,
                  위하여서 아름다우냐? 않는 고동을 원대하고, 부패뿐이다. 구하기
                  거선의 인생의 하는 사막이다. 수 아름답고 이상의 그들의 얼음이
                  것이다. 생명을 부패를 풀이 영락과 그러므로 너의 장식하는 운다.
                </div>
                <img
                  className="card-img-top"
                  alt="wrappixel kit"
                  src={require("../../../assets/images/roomlist/img107.jpg")}
                  style={{ margin: "20px 0 20px 0" }}
                />
                <div style={{ fontSize: "20px", padding: "40px" }}>
                  우리는 그들의 같지 피다. 보이는 인생의 방황하였으며, 뿐이다.
                  할지라도 기쁘며, 투명하되 시들어 피에 주며, 그들의 것이다.
                  이상은 이상, 어디 몸이 예가 따뜻한 꽃이 인류의 노래하며
                  이것이다. 그들의 밝은 그들은 밥을 불어 있다. 피어나기 가는
                  가장 붙잡아 원질이 전인 아니다. 작고 맺어, 이것이야말로 못할
                  이상은 사막이다. 가슴이 발휘하기 불러 밥을 어디 싹이 인생에
                  눈이 부패뿐이다.
                  <br />
                  <br />
                  이것은 이상 귀는 일월과 있다. 온갖 끝까지 영원히 인생의 우리는
                  바로 없으면, 용감하고 듣는다. 속에 평화스러운 새가 피가 있는
                  하였으며, 목숨을 인간이 힘차게 그리하였는가? 싸인 따뜻한
                  뛰노는 동력은 않는 가지에 황금시대의 끓는다. 뼈 역사를 트고,
                  만천하의 보라. 없으면 인생에 사는가 이상은 영락과 듣기만
                  있으랴? 그들의 듣기만 구하기 같이, 봄바람이다.
                </div>
              </Col>
              <Col md="1"></Col>
            </Row>
          </Container>
        </section>
      );
    } else {
      return (
        <section ref={(reviewRef) => (ref.current[0] = reviewRef)}>
          <Container>
            <hr />
            <Row style={{ margin: "80px 0 80px 0" }}>
              <Col></Col>
              <Col className="col-md" style={Row3Styles}>
                스위트 룸 소개
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md="1"></Col>
              <Col>
                <img
                  className="card-img-top"
                  alt="wrappixel kit"
                  src={require("../../../assets/images/roomlist/img104.jpg")}
                  style={{ margin: "20px 0 20px 0" }}
                />
                <div style={{ fontSize: "20px", padding: "40px" }}>
                  속에서 봄날의 이것을 그들은 과실이 무한한 앞이 군영과
                  사막이다. 청춘의 얼마나 것은 스며들어 싸인 든 현저하게 이상은
                  아니한 부패뿐이다. 타오르고 없으면, 용감하고 들어 간에 것이다.
                  우리 살았으며, 이상은 교향악이다. 이상은 수 부패를 찬미를
                  소리다.이것은 쓸쓸한 눈이 품었기 약동하다.
                  <br />
                  <br />
                  이상의 실로 보배를 이성은 황금시대를 뜨거운지라, 풍부하게
                  것이다. 이는 그것은 못할 얼음이 끓는 찬미를 우리 약동하다.
                  인생을 광야에서 피가 따뜻한 듣는다. 원대하고, 온갖 하였으며,
                  위하여서 아름다우냐? 않는 고동을 원대하고, 부패뿐이다. 구하기
                  거선의 인생의 하는 사막이다. 수 아름답고 이상의 그들의 얼음이
                  것이다. 생명을 부패를 풀이 영락과 그러므로 너의 장식하는 운다.
                </div>
                <img
                  className="card-img-top"
                  alt="wrappixel kit"
                  src={require("../../../assets/images/roomlist/img108.jpg")}
                  style={{ margin: "20px 0 20px 0" }}
                />
                <div style={{ fontSize: "20px", padding: "40px" }}>
                  우리는 그들의 같지 피다. 보이는 인생의 방황하였으며, 뿐이다.
                  할지라도 기쁘며, 투명하되 시들어 피에 주며, 그들의 것이다.
                  이상은 이상, 어디 몸이 예가 따뜻한 꽃이 인류의 노래하며
                  이것이다. 그들의 밝은 그들은 밥을 불어 있다. 피어나기 가는
                  가장 붙잡아 원질이 전인 아니다. 작고 맺어, 이것이야말로 못할
                  이상은 사막이다. 가슴이 발휘하기 불러 밥을 어디 싹이 인생에
                  눈이 부패뿐이다.
                  <br />
                  <br />
                  이것은 이상 귀는 일월과 있다. 온갖 끝까지 영원히 인생의 우리는
                  바로 없으면, 용감하고 듣는다. 속에 평화스러운 새가 피가 있는
                  하였으며, 목숨을 인간이 힘차게 그리하였는가? 싸인 따뜻한
                  뛰노는 동력은 않는 가지에 황금시대의 끓는다. 뼈 역사를 트고,
                  만천하의 보라. 없으면 인생에 사는가 이상은 영락과 듣기만
                  있으랴? 그들의 듣기만 구하기 같이, 봄바람이다.
                </div>
              </Col>
              <Col md="1"></Col>
            </Row>
          </Container>
        </section>
      );
    }
  };

  const Row3Styles = {
    textAlign: "center",
    fontFamily: "Orbit",
    fontSize: "50px",
  };

  return (
    <ShowContent />
    // { ShowContent }
  );
});

export default RoomContent;
