import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from "reactstrap";
import StarRating from "./starpont";
import { FaWikipediaW } from "react-icons/fa";

const Readreservation = () => {
  const [Reservation, setreservation] = useState([]);
  const [restarpont, setstarpont] = useState();
  const [reviewcon, setreviewcon] = useState("");
  const [modelon, setmodalon] = useState(false);
  const [modelon2, setmodalon2] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
  });

  const [temnum, settemnum] = useState("");

  const reviewchange = (event) => {
    setreviewcon(event.target.value);
  };

  const btn_togle = (event) => {
    setmodalon(!modelon);
    settemnum(event.target.id);
  };
  useEffect(() => {
    var moduserinfo = {
      id: sessionStorage.getItem("id"),
    };
    fetch(process.env.REACT_APP_SERVER_LOCAL + "/user/mypage", {
      method: "POST", //조회
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(moduserinfo),
    })
      .then((response) => {
        return response.json();
      })
      .then((date) => {
        setreservation(date);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addComma = (price) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  const btn_togle2 = (event) => {
    setmodalon2({ [event.target.id]: true });
  };

  useEffect(() => {
    var moduserinfo = {
      id: sessionStorage.getItem("id"),
    };
    fetch(process.env.REACT_APP_SERVER_LOCAL + "/user/mypage", {
      method: "POST", //조회
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(moduserinfo),
    })
      .then((response) => {
        return response.json();
      })
      .then((date) => {
        setreservation(date);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "500px",
      height: "450px",
      padding: "0",
      overflow: "auto",
    },
  };
  const customStyles2 = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "300px",
      padding: "0",
      overflow: "auto",
    },
  };
  const Reservationlist = () => {
    console.log(Reservation.length);
    if (Reservation.length !== undefined) {
      return Reservation.map(
        (
          Res,
          index //map방식을 사용하여 존재하는 값만큼 반복함 roomlist에저장된값만큼 for을 사용한다고 보면됌.
        ) => (
          <Row key={index} style={{ textAlign: "center", height: "100px" }}>
            <Col md="3" style={{ lineHeight: "100px", display: "table" }}>
              {Res.res_num.reservation_num}
            </Col>
            <Col style={{ lineHeight: "30px", display: "table" }}>
              <div
                style={{
                  lineHeight: "30px",
                  display: "table-cell",
                  verticalAlign: "middle",
                }}
              >
                {Res.res_num.r_num.r_num}호 <br />
                {Res.res_num.r_num.r_type}
              </div>
            </Col>
            <Col style={{ lineHeight: "100px", display: "table" }}>
              <div
                style={{
                  lineHeight: "30px",
                  display: "table-cell",
                  verticalAlign: "middle",
                }}
              >
                {new Date(Res.res_num.check_in).toLocaleDateString()}
                <br />~ {new Date(Res.res_num.check_out).toLocaleDateString()}
              </div>
            </Col>
            <Col
              className="text-center"
              style={{ lineHeight: "100px", display: "table" }}
            >
              <input
                type="button"
                className="btn btn-primary"
                id={index}
                onClick={btn_togle2}
                value={"선택 옵션 보기"}
                style={{
                  display: "table-cell",
                  verticalAlign: "middle",
                  height: "44",
                  fontSize: "13px",
                  padding: "10px",
                }}
              ></input>
              <Modal id={index} style={customStyles2} isOpen={modelon2[index]}>
                <Container>
                  <Row style={{ height: "30px", margin: "10px 0 20px 0" }}>
                    <Col
                      style={{
                        fontSize: "25px",
                        textAlign: "center",
                        fontFamily: "Orbit",
                      }}
                    >
                      선택된 옵션
                    </Col>
                  </Row>

                  {Reservation[index].imt0 !== undefined ? (
                    Object.keys(Res)
                      .filter((key) => key.startsWith("imt"))
                      .map((optionKey) => {
                        return (
                          <Row style={{ textAlign: "center" }}>
                            <hr style={{ marginBottom: "10px" }} />
                            <Col>{Res[optionKey].option_content}</Col>
                            <Col>{addComma(Res[optionKey].option_price)}원</Col>
                            <hr style={{ marginTop: "10px" }} />
                          </Row>
                        );
                      })
                  ) : (
                    <Row style={{ textAlign: "center" }}>
                      <Col style={{ margin: "5px 0 20px" }}>
                        선택된 옵션이 없습니다
                      </Col>
                    </Row>
                  )}

                  <Row>
                    <Col style={{ textAlign: "center", margin: "0 0 15px 0" }}>
                      <input
                        type="button"
                        value={"닫기"}
                        onClick={btn_togle2}
                        className="btn btn-secondary"
                      />
                    </Col>
                  </Row>
                </Container>
              </Modal>
            </Col>
            <Col
              style={{
                lineHeight: "100px",
                display: "table",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "table-cell",
                  verticalAlign: "middle",
                }}
              >
                {addComma(Res.res_num.total_price)} 원
              </div>
            </Col>
            <Col style={{ lineHeight: "100px", display: "table" }}>
              <input
                type="button"
                id={index}
                className="btn btn-gaya-gradiant"
                onClick={btn_togle}
                value={"리뷰작성"}
                style={{
                  display: "table-cell",
                  verticalAlign: "middle",
                }}
              ></input>
            </Col>
            <hr />
          </Row>
        )
      );
    } else {
      return (
        <Row>
          <Col></Col>
          <Col>예약된 내역이 없습니다.</Col>
          <Col></Col>
          <hr />
        </Row>
      );
    }
  };

  const addreview = () => {
    var reviwe = {
      content: reviewcon,
      starpoint: restarpont,
      id: { id: sessionStorage.getItem("id") },
      r_num: { r_num: Reservation[temnum].res_num.r_num.r_num },
      reservation_num: {
        reservation_num: Reservation[temnum].res_num.reservation_num,
      },
    };
    fetch(process.env.REACT_APP_SERVER_LOCAL + "/review/write", {
      method: "POST", //조회
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviwe),
    })
      .then((response) => {
        if (response.ok) {
          alert("리뷰 작성되었습니다.");
          setmodalon(!modelon);
        } else {
          alert("실패");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container style={{ marginBottom: "200px" }}>
      <Row>
        <Col
          style={{
            fontSize: "40px",
            fontFamily: "Orbit",
            margin: "30px 0 30px 20px",
          }}
        >
          예약 내역
        </Col>
      </Row>
      <hr style={{ margin: "0px" }} />
      <div style={{ height: "40px", backgroundColor: "#e2e2e2" }}>
        <Row style={{ textAlign: "center", lineHeight: "40px" }}>
          <Col md="3">예약번호</Col>
          <Col>방정보</Col>
          <Col>숙박일</Col>
          <Col>선택 옵션</Col>
          <Col>총결제금액</Col>
          <Col>리뷰작성</Col>
        </Row>
      </div>
      <hr style={{ margin: "0px" }} />
      <Reservationlist />
      <Modal style={customStyles} isOpen={modelon}>
        <Container style={{ padding: "20px 30px 20px 30px" }}>
          <Row>
            <Col
              style={{
                fontSize: "25px",
                marginBottom: "15px",
                textAlign: "center",
              }}
            >
              리뷰작성{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                type="text"
                onChange={reviewchange}
                style={{ width: "100%", height: "100px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col md="3"></Col>
            <Col md="7" style={{ margin: "0 0 0 -4px" }}>
              <StarRating setreview={setstarpont} />
            </Col>
            <Col></Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col></Col>
            <Col>
              <input
                className="btn btn-gaya-gradiant"
                type="button"
                value={"작성"}
                onClick={addreview}
              />
            </Col>
            <Col>
              <input
                className="btn btn-secondary"
                type="button"
                value={"취소"}
                onClick={btn_togle}
              />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Modal>
    </Container>
  );
};

export default Readreservation;
