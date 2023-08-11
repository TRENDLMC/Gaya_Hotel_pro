import React, { useEffect, useState, useCallback } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import Modal from "react-modal";
import { CheckoutPage } from "./../../pay/sections/checkout";
import TooltipPopover from "./pricepopover.jsx";

const RoomDetail = () => {
  const SERVER_URL = "http://localhost:8095/";

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

  //옵션 리스트가 변할때마다 useEffect 로 총 결제 금액이 실시간으로 변함
  const [totalPay, setTotalPay] = useState();

  // 방정보 받기

  const getRoomDetail = (r_num) => {
    const rrum = { r_num };

    fetch(SERVER_URL + "reserv/detail", {
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

    fetch(SERVER_URL + "reserv/option", {
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
          console.log("arr j : " + arr[j]);
          console.log("option i : " + JSON.stringify(options[i].option_code));
          if ('"' + arr[j] + '"' === JSON.stringify(options[i].option_code)) {
            console.log("성공");
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

  const Row1Style = {
    width: "100%",
    border: "solid",
  };

  const InfoStyle = {
    border: "solid",
  };

  const optionListView = optionList.map(
    (
      option //map방식을 사용하여 존재하는 값만큼 반복함 방 타입에 따른 옵션이 추가됨
    ) => {
      return (
        // <label className="checkboxLabel" key={option.option_code}>
        //   <input
        //     type="checkbox"
        //     id={option.option_code}
        //     value={option.option_price}
        //     onChange={(e) => {
        //       onCheckedItem(e.target.checked, e.target.id, e.target.value);
        //     }}
        //   />
        //   <label htmlFor={option.option_code}>
        //     {option.option_code} : {option.option_content}
        //   </label>
        // </label>
        <Row md="2" style={InfoStyle}>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id={option.option_code}
              value={option.option_price}
              onChange={(e) => {
                onCheckedItem(e.target.checked, e.target.id, e.target.value);
              }}
            />
            <label for={option.option_code}>
              {option.option_code} : {option.option_content}
            </label>
          </div>
        </Row>
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

  return (
    <div>
      <div>
        <Row style={fonth1} className="justify-content-center">
          <Col md="2" className="text-center" style={{}}>
            <label>예&nbsp;&nbsp;&nbsp;약</label>
          </Col>
        </Row>
      </div>

      <Container>
        <Row>
          <Col style={Row1Style} className="cl-md-6">
            <div>사진 칸</div>
          </Col>
          {/* 사용가능한 방 옵션 선택시 스트링으로 저장할수 있게 */}
          <Col className="cl-md-6" style={Row1Style}>
            <Container>
              <Row style={{ fontSize: "30px", margin: "15px 0 0 10px" }}>
                객실 번호 : {detailInfo.r_num} 호실
              </Row>
              <hr />
              <Row style={{ fontSize: "20px", marginLeft: "5px" }}>
                <Col md="3">{detailInfo.r_type}</Col>
                <Col>{detailInfo.r_size} 인실</Col>
              </Row>
              <hr />
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <Row>
                    <Col>입실 날짜</Col>
                    <Col>{detailInfo.tmp_checkin}</Col>
                  </Row>
                  <Row>
                    <Col>퇴실 날짜</Col>
                    <Col>{detailInfo.tmp_checkout}</Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col>총 일수</Col>
                  </Row>
                  <Row>
                    <Col>
                      {detailInfo.total}박 {detailInfo.total + 1} 일
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
              <Row style={InfoStyle}>
                <Col>
                  <Row>
                    <Col style={InfoStyle}>옵션 선택</Col>
                    <Col>
                      <TooltipPopover />
                    </Col>
                  </Row>
                  {optionListView}
                </Col>
                <Col>
                  <Row style={InfoStyle}>총 결제 금액 </Row>
                  <Row style={InfoStyle}> {totalPay}</Row>
                  <Row style={InfoStyle}>
                    <Col className="text-center">
                      <input
                        type="button"
                        style={{ marginTop: "5px" }}
                        onClick={(event) => {
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
                        value={"결제"}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
          {/* 예약하기 버튼을 누르면 결제 모달창이 뜨게  */}
        </Row>
      </Container>
      {/* 최종 예약 정보창 모달 */}
      <Modal isOpen={modalop} ariaHideApp={false} style={modalStyles}>
        <Container style={{ height: "100%", border: "solid" }}>
          <Row style={{ height: "100%" }}>
            {/* 모달창 왼쪽 */}
            <Col style={InfoStyle} md="6">
              <Row style={InfoStyle}>
                <Col>객실 번호</Col>
                <Col>{detailInfo.r_num}</Col>
              </Row>
              <Row style={InfoStyle}>
                <Col>객실 종류</Col>
                <Col>{detailInfo.r_type}</Col>
              </Row>
              <Row style={InfoStyle}>
                <Col>객실 최대 인원</Col>
                <Col>{detailInfo.r_size}</Col>
              </Row>
              <Row style={InfoStyle}>
                <Col>체크인 날짜</Col>
                <Col>{detailInfo.tmp_checkin}</Col>
              </Row>
              <Row style={InfoStyle}>
                <Col>체크아웃 날짜</Col>
                <Col>{detailInfo.tmp_checkout}</Col>
              </Row>
              <Row style={InfoStyle}>
                <Row>선택된 옵션 </Row>

                <Col style={InfoStyle}>{showSelectedOptions}</Col>
              </Row>
              결제 총 금액 창<Row>총 결제 금액 : {totalPay}</Row>
              <input
                className="btn btn-info"
                style={{ marginLeft: "210px" }}
                type="button"
                value={"확인"}
                onClick={(event) => {
                  //모달창 상태 토글
                  ontogel();
                  // 선택된 옵션 초기화
                  setSelectedOption([]);
                }}
              />
            </Col>

            {/* 모달창 오른쪽 */}

            <Col style={InfoStyle} md="6">
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
