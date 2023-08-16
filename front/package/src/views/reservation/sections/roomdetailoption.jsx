import React, { useRef, forwardRef } from "react";
import { Container, Row, Col } from "reactstrap";

// const RoomContent = forwardRef((props, ref) => {
//   // 세션 스토리지 roomInfo

const options = [
  {
    title: "수영장",
    text: "별 불러 별을 봅니다. 둘 슬퍼하는 별 헤일 지나가는 새워 버리었습니다. 이네들은 비둘기, 이름과, 듯합니다. 이국 불러 이네들은 까닭입니다. 무엇인지 차 나는 나는 북간도에 프랑시스 마디씩 까닭입니다. 어머님, 이국 그리워 이네들은 나는 이름과 별 어머니, 동경과 듯합니다. 나는 부끄러운 헤일 나는 어머니 거외다.",
    imgTitle: "swimmingpool.jpg",
  },
  {
    title: "바베큐",
    text: "하나에 풀이 지나고 경, 한 쉬이 계십니다. 나는 하나에 없이 아이들의 그리고 이름자 사람들의 계십니다. 멀듯이, 잔디가 이 별이 무덤 계십니다. 노새, 파란 흙으로 써 밤이 소녀들의 언덕 남은 패, 까닭입니다. 위에 가을 언덕 오면 별들을 별을 하나에 이네들은 아침이 버리었습니다. 별 가을 나의 이름과, 듯합니다.",
    imgTitle: "BBQ.jpg",
  },
  {
    title: "조식",
    text: "소학교 동경과 마디씩 마리아 있습니다. 불러 내린 무엇인지 보고, 봅니다. 때 걱정도 것은 거외다. 이름과, 봄이 릴케 패, 같이 아름다운 별 그러나 별을 거외다. 무성할 애기 했던 다 이 가난한 어머니 헤는 이름과, 봅니다. 릴케 아무 청춘이 이름과, 계십니다. 없이 하늘에는 않은 오면 까닭입니다.",
    imgTitle: "breakfast.jpg",
  },
  {
    title: "사우나",
    text: "토끼, 까닭이요, 딴은 헤는 별 많은 계십니다. 불러 너무나 우는 덮어 봅니다. 이름을 없이 애기 봄이 있습니다. 하나 새겨지는 때 추억과 까닭입니다. 이름과, 하나에 릴케 별에도 못 소녀들의 까닭입니다. 않은 풀이 나의 동경과 별에도 있습니다. 언덕 하나 걱정도 별 있습니다.",
    imgTitle: "sauna.jpg",
  },
  {
    title: "추가침대",
    text: "가득 나는 아침이 어머님, 내일 계집애들의 걱정도 다 별이 버리었습니다. 이제 패, 오면 어머니, 이런 잔디가 같이 것은 둘 있습니다. 오면 한 이런 이네들은 애기 거외다. 너무나 패, 걱정도 별 나의 새워 까닭입니다. 하나에 없이 까닭이요, 소학교 별을 계십니다.",
    imgTitle: "extrabed.jpg",
  },
  {
    title: "VR",
    text: "하나의 하늘에는 어머님, 가난한 속의 이름자를 있습니다. 하나의 위에 벌써 이름자를 무덤 아름다운 계십니다. 별 쉬이 위에 많은 이름자 하나 소학교 가득 내린 까닭입니다. 위에 강아지, 별 하나의 어머님, 언덕 봅니다. 잠, 멀듯이, 릴케 하늘에는 언덕 이런 버리었습니다.",
    imgTitle: "VR.jpg",
  },
  {
    title: "키즈카페",
    text: "별을 때 남은 거외다. 별 노새, 청춘이 벌써 새워 너무나 어머니, 있습니다. 별이 가득 별 우는 하나의 언덕 그리고 있습니다. 이름과, 이웃 보고, 했던 사랑과 프랑시스 이름을 걱정도 말 계십니다. 가슴속에 피어나듯이 그리고 남은 계십니다. 그리워 이름과 나는 이름과, 다 위에 사람들의 별 거외다.",
    imgTitle: "kidscafe.jpg",
  },
  {
    title: "기념행사",
    text: "파란 별 나는 다 잠, 밤이 풀이 불러 거외다. 토끼, 슬퍼하는 하나 까닭입니다. 같이 내일 써 소녀들의 듯합니다. 겨울이 마리아 내 나의 북간도에 가슴속에 지나가는 하나 애기 봅니다. 한 라이너 이웃 봄이 별을 벌써 하나에 언덕 이런 있습니다.",
    imgTitle: "event.jpg",
  },
];

const wrapperstyle = {
  margin: "15px",
  borderRadius: "15px",
  background: "#F8F0E5",
  boxShadow: "2px 2px",
};

const wrapperstyle2 = {
  margin: "15px",
  borderRadius: "15px",
  background: "#FFFFFF",
  boxShadow: "2px 2px",
};

const titlestyle = {
  fontSize: "30px",
  fontFamily: "Orbit",
  fontWeight: "bold",
  textAlign: "center",
  margin: "15px 0 15px 0",
};
const textstyle = {
  textAlign: "left",
};
const imgstyle = {};

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
          <Col className="text-center">
            <div>
              {options.map((alloptions, idx) => {
                if (idx % 2 === 1) {
                  return (
                    <Row style={wrapperstyle}>
                      <Col md="3" style={imgstyle}>
                        <img
                          className="card-img-top"
                          alt="wrappixel kit"
                          src={require("../../../assets/images/option/" +
                            alloptions.imgTitle)}
                          style={{ margin: "20px 0 20px 0" }}
                        />
                      </Col>
                      <Col>
                        <Row>
                          <Col style={titlestyle}>{alloptions.title}</Col>
                        </Row>
                        <Row>
                          <Col style={textstyle}>{alloptions.text}</Col>
                        </Row>
                      </Col>
                    </Row>
                  );
                } else {
                  return (
                    <Row style={wrapperstyle2}>
                      <Col>
                        <Row>
                          <Col style={titlestyle}>{alloptions.title}</Col>
                        </Row>
                        <Row>
                          <Col style={textstyle}>{alloptions.text}</Col>
                        </Row>
                      </Col>
                      <Col md="3" style={imgstyle}>
                        <img
                          className="card-img-top"
                          alt="wrappixel kit"
                          src={require("../../../assets/images/option/" +
                            alloptions.imgTitle)}
                          style={{ margin: "20px 0 20px 0" }}
                        />
                      </Col>
                    </Row>
                  );
                }
              })}
            </div>
          </Col>
          <Col md="1"></Col>
        </Row>
        <hr />
      </Container>
    </section>
  );
});

export default RoomContent;
