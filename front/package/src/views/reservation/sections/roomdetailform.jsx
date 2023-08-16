import React, { useEffect, useState, useCallback } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import Modal from "react-modal";
import { CheckoutPage } from "./../../pay/sections/checkout";
import TooltipPopover from "./pricepopover.jsx";

const RoomDetail = () => {
  // 세션 스토리지 roomInfo -> 방리스트 페이지에서 받아온 방 정보 JSON
  const [detailInfo, setDetailInfo] = useState([]);
  const RoomInfo = JSON.parse(sessionStorage.getItem("roominfo"));
  const seesionId = sessionStorage.getItem("id");
  const [SavedReservation, setSavedReservation] = useState({
    check_in: "",
    check_out: "",
    option_code: "",
    total_price: "",
    id: "",
    r_rum: "",
    order_id: "",
  });
  // [Object object] JSON파일을 풀어서 로그에 보낼려면 Stringify
  // 처음 페이지가 렌더링 될시 방 정보,체크인,체크아웃,

  useEffect(() => {
    getRoomDetail(RoomInfo.r_num);
  }, []);

  // 결제 시 필요한 정보 객체
  const [paymentInfo, setPaymentInfo] = useState({
    id: "",
    roomNum: "",
    total_pay: "",
  });

  const [optionList, setOptionList] = useState([]);

  const Showimg = () => {
    let roomNum = RoomInfo.r_num;
    return (
      <img
        className="card-img-top"
        alt="wrappixel kit"
        src={require("../../../assets/images/roomlist/img" + roomNum + ".jpg")}
        style={{ margin: "0px 0 0px 0", height: "100%" }}
      />
    );
  };
  //옵션 리스트가 변할때마다 useEffect 로 총 결제 금액이 실시간으로 변함
  const [totalPay, setTotalPay] = useState();

  // 방정보 받기
  const getRoomDetail = (r_num) => {
    const rrum = { r_num };

    fetch(process.env.REACT_APP_SERVER_LOCAL + "/reserv/detail", {
      //fetch로 연결된 서버로 전송함
      method: "POST", //전송 mapper를 설정
      headers: { "Content-Type": "application/json" }, //값을 json형식으로 보내므로 headers에 전송값을 설정해줌
      body: JSON.stringify(rrum), //보디에는 json형식으로 문자형으로 변경하여 위에서 저장한 값을 뿌려줌
    })
      .then((response) => {
        //성공시 서버에서 반환한 값을 json형태로변환
        return response.json();
      })
      .then((data) => {
        // console.log("data.r_num :" + data.r_num);
        // console.log("data.r_size :" + data.r_size);
        const tmp = {
          r_num: data.r_num,
          r_size: data.r_size,
          r_price: data.r_price * RoomInfo.total,
          r_type: data.r_type,
          tmp_checkin: RoomInfo.check_in,
          tmp_checkout: RoomInfo.check_out,
          total: RoomInfo.total,
        };
        console.log(tmp);
        setTotalPay(tmp.r_price);
        getOptionList(tmp);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getOptionList = (tmp) => {
    setDetailInfo(tmp);
    console.log(detailInfo);

    fetch(process.env.REACT_APP_SERVER_LOCAL + "/reserv/option", {
      //fetch로 연결된 서버로 전송함
      method: "POST", //전송 mapper를 설정
      headers: { "Content-Type": "application/json" }, //값을 json형식으로 보내므로 headers에 전송값을 설정해줌
      body: JSON.stringify(tmp), //보디에는 json형식으로 문자형으로 변경하여 위에서 저장한 값을 뿌려줌
    })
      .then((response) => {
        //성공시 서버에서 반환한 값을 json형태로변환
        return response.json();
      })
      .then(async (data) => {
        console.log(data);
        setOptionList(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const [selectedOption, setSelectedOption] = useState([]);

  const selectedOptions = () => {
    if (optionList !== undefined) {
      // 방에서 가능한 옵션 리스트에서 체크된 옵션 리스트를 비교하여 있으면 리스트에 저장
      // 방에서 가능한 옵션 리스트
      const options = optionList;
      // arr 은 선택된 옵션들의 리스트
      const arr = checkedList.split("");
      // console.log(arr.sort());
      // console.log(typeof arr[0]);
      // console.log(JSON.stringify(options[0]));
      for (let i = 0; i < options.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if ('"' + arr[j] + '"' === JSON.stringify(options[i].option_code)) {
            selectedOption.push(options[i]);
          }
        }
      }
      setSelectedOption(selectedOption);
    }
  };

  // 선택된 옵션 리스트 출력
  const showSelectedOptions = selectedOption.map(
    (
      sOption //map방식을 사용하여 존재하는 값만큼 반복함 roomlist에저장된값만큼 for을 사용한다고 보면됌.
    ) => {
      return <Row>{sOption.option_content}</Row>;
    }
  );
  const showSelectedOptions2 = selectedOption.map(
    (
      sOption //map방식을 사용하여 존재하는 값만큼 반복함 roomlist에저장된값만큼 for을 사용한다고 보면됌.
    ) => {
      return (
        <Row style={{ fontSize: "15px" }}>
          <Col>{sOption.option_content}</Col>
          <Col>{sOption.option_price} 원</Col>
        </Row>
      );
    }
  );

  const optionListView = optionList.map(
    (
      option //map방식을 사용하여 존재하는 값만큼 반복함 방 타입에 따른 옵션이 추가됨
    ) => {
      return (
        <Col md="6" className="box" style={{ paddingLeft: "60px" }}>
          <input
            type="checkbox"
            id={option.option_code}
            value={option.option_price}
            onChange={(e) => {
              onCheckedItem(e.target.checked, e.target.id, e.target.value);
            }}
          />
          <label htmlFor={option.option_code}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{option.option_content}
          </label>
        </Col>
      );
    }
  );

  // 체크박스 체크 및 해제시 리스트에 추가 제거
  const [checkedList, setCheckedList] = useState("");
  const onCheckedItem = useCallback(
    (checked, code, value) => {
      // 체크 했을시
      if (checked) {
        // checkList에 추가 및 총 가격 증가
        setCheckedList(checkedList + code);
        setTotalPay(totalPay + Number(value));
        //체크 해제시
      } else if (!checked) {
        // checkList에서 제거 및 총 가격 감소
        setCheckedList(checkedList.replace(code, ""));
        setTotalPay(totalPay - Number(value));
      }
    },
    [checkedList, totalPay]
  );

  //결제 정보 모달창 Style
  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "1100px",
      height: "600px",
      padding: "0",
      overflow: "hidden",
    },
  };

  const ontogel = () => {
    setModelop(!modalop); //날짜 입력받기위해서 달력 modal을 켜주는 togle
  };
  const [modalop, setModelop] = useState(false); //결제창 모달 on off state

  const fonth1 = {
    margin: "30px 0 30px",
    fontSize: "50px",
    color: "#333637",
    fontWeight: "bold",
    fontFamily: "Orbit",
  };

  const Row1Style = {
    border: "solid 1px #8f103d",
    padding: "25px 25px 25px 25px",
    borderRadius: "10px",
  };

  const InfoStyle = {
    border: "solid",
  };
  // 금액 천단위마다 , 찍는 펑션
  const addComma = (price) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  return (
    <div>
      <div>
        <Col>
          <Row style={fonth1} className="justify-content-center">
            <Col md="2" className="text-center">
              <label>예&nbsp;&nbsp;&nbsp;약</label>
            </Col>
          </Row>
        </Col>
      </div>

      <Container
        style={
          {
            //  fontFamily: "Orbit"
          }
        }
      >
        <Row>
          <Col md="6" style={{ padding: "15px" }}>
            <Showimg />
          </Col>
          <Col md="6" style={Row1Style}>
            <Row style={{ fontSize: "30px", fontFamily: "Orbit" }}>
              <Col style={{ marginLeft: "20px" }}>
                객실 번호 : {detailInfo.r_num} 호실
              </Col>
            </Row>
            <hr />
            <Row
              style={{
                fontSize: "20px",
                marginLeft: "5px",
                fontFamily: "Orbit",
              }}
            >
              <Col>
                {detailInfo.r_type}&nbsp;&nbsp;{detailInfo.r_size} 인실
              </Col>
            </Row>
            <hr />
            <Row>
              <Col style={{ textAlign: "center" }}>
                <Row>
                  <Col style={{ fontFamily: "Orbit" }}>입실 날짜</Col>
                  <Col>{detailInfo.tmp_checkin}</Col>
                </Row>
                <hr />
                <Row>
                  <Col style={{ fontFamily: "Orbit" }}>퇴실 날짜</Col>
                  <Col>{detailInfo.tmp_checkout}</Col>
                </Row>
              </Col>
              <Col style={{ textAlign: "center", marginTop: "10px" }}>
                <Row>
                  <Col></Col>
                  <Col
                    md="8"
                    style={{
                      fontSize: "20px",
                      fontFamily: "Orbit",
                      marginBottom: "5px",
                    }}
                  >
                    총 일수
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col md="8" style={{ fontSize: "20px", fontFamily: "Orbit" }}>
                    {detailInfo.total}박 {detailInfo.total + 1}일
                  </Col>
                  <Col></Col>
                </Row>
              </Col>
            </Row>
            <hr />
            <Row style={{ textAlign: "center", marginBottom: "10px" }}>
              <Col
                style={{
                  fontSize: "22px",
                  padding: "0px 0px 0px 40px",
                  fontFamily: "Orbit",
                }}
              >
                옵션 선택
              </Col>
              <TooltipPopover />
            </Row>
            <div style={{ border: "solid 1px", padding: "5px" }}>
              <Row>{optionListView}</Row>
            </div>
            <hr />
            <Row style={{ margin: "20px 0 20px" }}>
              <Col md="4" style={{ fontSize: "20px" }}>
                총 결제 금액
              </Col>
              <Col style={{ fontSize: "28px", fontFamily: "Gugi" }}>
                {addComma(totalPay)} 원
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <input
                  type="button"
                  style={{ marginTop: "5px" }}
                  onClick={(event) => {
                    console.log("셀렉티드 옵션" + selectedOption);
                    console.log(
                      "셀렉티드 옵션" + JSON.stringify(selectedOption)
                    );

                    ontogel();
                    selectedOptions();
                    setPaymentInfo({
                      id: seesionId,
                      room_Num: detailInfo.r_num,
                      total_pay: totalPay,
                    });
                    // db에 저장될 예약 정보
                    setSavedReservation({
                      id: seesionId,
                      r_num: detailInfo.r_num,
                      total_price: totalPay,
                      check_in: RoomInfo.check_in,
                      check_out: RoomInfo.check_out,
                      option_code: checkedList,
                      order_id: "",
                    });
                    console.log(
                      "저장된 예약정보" + JSON.stringify(SavedReservation)
                    );
                  }}
                  className="btn btn-gaya-gradiant col-md-12"
                  value={"결 제"}
                />
              </Col>
            </Row>
          </Col>
          {/* 예약하기 버튼을 누르면 결제 모달창이 뜨게  */}
        </Row>
      </Container>
      {/* 최종 예약 정보창 모달 */}
      <Modal isOpen={modalop} ariaHideApp={false} style={modalStyles}>
        <Container style={{ height: "100%", textAlign: "center" }}>
          <Row style={{ height: "100%" }}>
            {/* 모달창 왼쪽 */}
            <Col md="6" style={{ border: "1px solid", fontSize: "20px" }}>
              <Row>
                <Col style={{ borderRight: "1px solid", fontSize: "20px" }}>
                  객실 번호
                </Col>
                <Col>{detailInfo.r_num}</Col>
              </Row>
              <Row>
                <Col style={{ borderRight: "1px solid" }}>객실 종류</Col>
                <Col>{detailInfo.r_type}</Col>
              </Row>
              <Row>
                <Col style={{ borderRight: "1px solid" }}>객실 최대 인원</Col>
                <Col>{detailInfo.r_size} 인</Col>
              </Row>
              <Row>
                <Col style={{ borderRight: "1px solid" }}>체크인 날짜</Col>
                <Col>{detailInfo.tmp_checkin}</Col>
              </Row>
              <Row style={{ borderBottom: "1px solid" }}>
                <Col style={{ borderRight: "1px solid" }}>체크아웃 날짜</Col>
                <Col>{detailInfo.tmp_checkout}</Col>
              </Row>
              <Row style={{ borderBottom: "1px solid", paddingBottom: "10px" }}>
                <Col>
                  <Row style={{ paddingTop: "15px", fontSize: "25px" }}>
                    <Col>선택된 옵션</Col>
                  </Row>
                  <hr />
                  {selectedOption && showSelectedOptions2}
                  {selectedOption.length === 0 && (
                    <Row style={{ margin: "20px 0 20px" }}>
                      <Col style={{ textAlign: "center" }}>
                        선택된 옵션이 없습니다.
                      </Col>
                    </Row>
                  )}
                </Col>
              </Row>
              <Row style={{ fontSize: "30px", paddingTop: "10px" }}>
                <Col>총 결제 금액</Col>
                <Col>{addComma(totalPay)}원</Col>
              </Row>

              <Row style={{ margin: "15px 0 0 0 " }}>
                <input
                  className="btn btn-info"
                  style={{ width: "80%", margin: "0 auto" }}
                  type="button"
                  value={"닫 기"}
                  onClick={(event) => {
                    //모달창 상태 토글
                    ontogel();
                    // 선택된 옵션 초기화
                    setSelectedOption([]);
                  }}
                />
              </Row>
            </Col>

            {/* 모달창 오른쪽 */}

            <Col md="6">
              {/* 토스 결제 창 */}
              <CheckoutPage
                payinfo={paymentInfo}
                reservationinfo={SavedReservation}
              />
            </Col>
          </Row>
        </Container>
      </Modal>
    </div>
  );
};

export default RoomDetail;
