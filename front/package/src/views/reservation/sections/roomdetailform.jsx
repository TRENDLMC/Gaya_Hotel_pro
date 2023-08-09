import React, { useEffect, useState, useCallback } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import Modal from "react-modal";

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
      return (
        <Row>
          {sOption.option_content}
        </Row>
      );
    }
  );

  const Row1Style = {
    height: "500px",
    width: "100%",
    border: "solid",
  };

  const InfoStyle = {
    border: "solid",
  };

  const optionListView2 = optionList.map(
    (
      option //map방식을 사용하여 존재하는 값만큼 반복함 roomlist에저장된값만큼 for을 사용한다고 보면됌.
    ) => {
      return (
        <label className="checkboxLabel" key={option.option_code}>
          <input
            type="checkbox"
            id={option.option_code}
            value={option.option_price}
            onChange={(e) => {
              onCheckedItem(e.target.checked, e.target.id, e.target.value);
            }}
          />
          <label htmlFor={option.option_code}>
            {option.option_code} : {option.option_content}
          </label>
        </label>
      );
    }
  );

  const [checkedList, setCheckedList] = useState("");
  const onCheckedItem = useCallback(
    (checked, code, value) => {
      if (checked) {
        setCheckedList(checkedList + code);
        setTotalPay(totalPay + Number(value));
      } else if (!checked) {
        setCheckedList(checkedList.replace(code, ""));
        setTotalPay(totalPay - Number(value));
      }
    },
    [checkedList, totalPay]
  );

  //결제 정보 모달창 상태

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "658px",
      height: "350px",
      padding: "0",
      overflow: "hidden",
    },
  };

  const ontogel = () => {
    setModelop(!modalop); //날짜 입력받기위해서 달력 modal을 켜주는 togle
  };
  const [modalop, setModelop] = useState(false); //결제창 모달 on off state

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
                {/* {optionListView} */}
                {optionListView2}
              </Row>
              {/* {miniOptions} */}
              <Row style={InfoStyle}>
                <Col style={InfoStyle}>총 결제 금액 : {totalPay}</Col>
              </Row>
              <Row style={InfoStyle}>
                <Container>
                  <Col style={InfoStyle}>
                    <Col md="2" className="text-center">
                      <input
                        type="button"
                        style={{ marginTop: "5px" }}
                        onClick={(event) => {
                          ontogel();
                          selectedOptions();
                        }}
                        className="btn btn-success waves-effect waves-light m-r-5 col-md-10"
                        value={"결제"}
                      />
                    </Col>
                    {/* 최종 예약 정보창 모달 */}
                    <Modal
                      isOpen={modalop}
                      ariaHideApp={false}
                      style={customStyles}
                    >
                      <Container style={InfoStyle} >
                        {/* <Col style={InfoStyle} md="6">
                          정보창
                          <Row style={InfoStyle}>선택된 옵션 </Row>
                        {showSelectedOptions}
                        </Col>
                        <Col style={InfoStyle} md="6">
                          결제 총 금액 창

                        <Row>총 결제 금액 : {totalPay}</Row>
                        <input
                        className="btn btn-info"
                        style={{ marginLeft: "210px" }}
                        type="button"
                        value={"확인"}
                        onClick={(event) => {
                          ontogel();
                          // 선택된 옵션 초기화
                          setSelectedOption([]);
                        }}
                      />
                      <input
                        className="btn btn-secondary"
                        style={{}}
                        type="button"
                        value={"닫기"}
                        onClick={(event) => {
                          ontogel();
                          // 선택된 옵션 초기화
                          setSelectedOption([]);
                        }}
                      />
                        </Col> */}

                       
                        <Row>
                        {/* 모달창 왼쪽 */}
                        <Col style={InfoStyle} md="6">
                          <Row style={InfoStyle}>
                            <Col>객실 번호</Col>
                            <Col>ㅎㅇ</Col>
                          </Row>
                          <Row style={InfoStyle}>
                            <Col>객실 종류</Col>
                            <Col>ㅎㅇ</Col>
                          </Row>
                          <Row style={InfoStyle}>
                            <Col>객실 최대 인원</Col>
                            <Col>ㅎㅇ</Col>
                          </Row>
                          <Row style={InfoStyle}>
                            <Col>체크인 날짜</Col>
                            <Col>ㅎㅇ</Col>
                          </Row>
                          <Row style={InfoStyle}>
                            <Col>체크아웃 날짜</Col>
                            <Col>ㅎㅇ</Col>
                          </Row>
                          <Row style={InfoStyle}>
                            <Row>선택된 옵션 </Row>
                            
                            <Col style={InfoStyle}>
                            {showSelectedOptions}
                            </Col>
                          </Row>
                        </Col>

                        {/* 모달창 오른쪽 */}
                        <Col style={InfoStyle} md="6">
                          결제 총 금액 창

                        <Row>총 결제 금액 : {totalPay}</Row>
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
                          // 결제 팝업창
                        }}
                      />
                          </Col>
                        </Row>    
                      </Container>
                      
                    </Modal>
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
