import React, { useEffect, useState, useCallback } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";

const RoomDetail = () => {
  const SERVER_URL = "http://localhost:8095/";

  // 세션 스토리지 roomInfo -> 방리스트 페이지에서 받아온 방 정보 JSON
  const [detailInfo, setDetailInfo] = useState([]);
  const RoomInfo = JSON.parse(sessionStorage.getItem("roominfo"));
  // [Object object] JSON파일을 풀어서 로그에 보낼려면 Stringify
  // 처음 페이지가 렌더링 될시 방 정보,체크인,체크아웃,

  useEffect(() => {
    getRoomDetail(RoomInfo.r_num);
  }, []);

  // useEffect(() => {
  //   // setTotalPay(opto);
  // }, [totalPay]);

  // 결제 시 필요한 정보 객체
  const [paymentInfo, setPaymentInfo] = useState({
    id: "",
    roomNum: "",
    tmp_checkin: "",
    tmp_checkout: "",
    options: "",
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
          r_price: data.r_price,
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

  const Row1Style = {
    height: "500px",
    width: "100%",
    border: "solid",
  };

  const InfoStyle = {
    border: "solid",
  };

  const optionListView = optionList.map(
    (
      option //map방식을 사용하여 존재하는 값만큼 반복함 roomlist에저장된값만큼 for을 사용한다고 보면됌.
    ) => (
      <Row>
        <Col className="checkbox" key={option.option_code}>
          <input type="checkbox" id={option.option_code} />
          <label htmlFor={option.option_code}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{option.option_content}
          </label>
        </Col>
        <Col md="5">{option.option_price}원</Col>
      </Row>
    )
  );

  const optionListView2 = optionList.map(
    (
      option //map방식을 사용하여 존재하는 값만큼 반복함 roomlist에저장된값만큼 for을 사용한다고 보면됌.
    ) => {
      return (
        <label className="checkboxLabel" key={option.option_code}>
          <input
            type="checkbox"
            id={option.option_code}
            onChange={(e) => {
              onCheckedItem(e.target.checked, e.target.id);
            }}
          />
          <label htmlFor={option.option_code}>
            <span></span>
            {option.option_code} : {option.option_content}
          </label>
        </label>
      );
    }
  );

  const [checkedList, setCheckedList] = useState("");
  const onCheckedItem = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedList(checkedList + item);
        console.log(checkedList);
      } else if (!checked) {
        setCheckedList(checkedList.replace(item, ""));
        console.log(checkedList);
      }
    },
    [checkedList]
  );

  return (
    <div>
      <div className="spacer" id="forms-component">
        <Container>
          <Row>
            <Col md="12">
              <div className="col-md-8 ">객실 정보</div>
              <div
                className="title font-bold col-md-12"
                style={{ fontSize: "40px" }}
              >
                객실 정보 페이지
              </div>
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
                <Col style={InfoStyle}>객실 번호 :{detailInfo.r_num}</Col>
                <Col style={InfoStyle}>객실 종류 :{detailInfo.r_type}</Col>
              </Row>
              <Row style={InfoStyle}>
                <Col style={InfoStyle}>객실 사이즈 : {detailInfo.r_size}</Col>
                <Col style={InfoStyle}> 인원수 조정 </Col>
              </Row>
              <Row style={InfoStyle}>
                <Col style={InfoStyle}>
                  체크인 날짜 :{detailInfo.tmp_checkin}
                </Col>
                <Col style={InfoStyle}>
                  체크 아웃 날짜 :{detailInfo.tmp_checkout}
                </Col>
              </Row>
              <Row style={InfoStyle}>
                <Col style={InfoStyle}>옵션 선택</Col>
                {optionListView}
                {optionListView2}
              </Row>
              {/* {miniOptions} */}
              <Row style={InfoStyle}>
                <Col style={InfoStyle}>총 결제 금액 : {totalPay}</Col>
              </Row>
              <Row style={InfoStyle}>
                <Container>
                  <Col style={InfoStyle}>
                    <button type="submit">예약하기</button>
                  </Col>
                </Container>
              </Row>
            </Container>
          </Col>
          {/* 예약하기 버튼을 누르면 결제 모달창이 뜨게  */}
        </Row>
      </Container>
    </div>
  );
};

export default RoomDetail;
