import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, FormGroup, Label, Input } from "reactstrap";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";

const Userinfo = () => {
  const [isOpen, setIsOpen] = useState(false); //카카오 주소록api 모달창을 띄우는 togle형 버튼
  const [useinfomation, setuserinfomation] = useState([]); //유저의정보를 담아주는 변수
  const [reonly, setreonly] = useState(true); //disabled를 활성하시키는 변수
  const [modalop, setmodal] = useState(false); // 비밀번호입력 모달창을띄우는 변수
  const [pwd, setpwd] = useState(""); //유저정보변경시 pwd를 사용하여 인증하기떄문에 그값을 저장해주는 변수.

  const togle = () => {
    setreonly(!reonly);
  }; //disabeld를 풀어주는 함수

  const usermodify = () => {
    setmodal(!modalop);
  }; //비밀번호입력모달창을 활성화시키는 함수

  const isopne = () => {
    setIsOpen(!isOpen);
  }; //주소록 api를 활성화시키는 함수

  useEffect(() => {
    let moduserinfo = {
      id: sessionStorage.getItem("id"),
    }; //아이디값을 세선에서 가져와서json형식으로 서버에보내줌
    fetch(process.env.REACT_APP_SERVER_LOCAL + "/user/info", {
      method: "POST", //조회
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(moduserinfo),
    })
      .then((response) => {
        return response.json(); //가져온 유저정보를 파싱
      })
      .then((date) => {
        setuserinfomation(date); //저장
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const pwdcheck = (event) => {
    setpwd(event.target.value);
  }; //비밀번호입력시 위에서선언ㅎ해둔 변수의 값을 변경시킴

  const pwdchecktow = () => {
    let moduserinfo = {
      id: sessionStorage.getItem("id"),
      pwd: pwd,
    }; //아이디와 비밀번호를 json형식으로 포장후 보냄

    fetch(process.env.REACT_APP_SERVER_LOCAL + "/user/chepwd", {
      method: "POST", //조회
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(moduserinfo),
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); //가져온값을 파싱
        }
      })
      .then((date) => {
        if (date === 1) {
          togle(); //값이 1이라면 togle함수를 실행시켜서 disabled를 풀어줌
          usermodify(); //비밀번호입력모달을 비활성화시킴
        } else {
          alert("비밀번호가 일치하지 않습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const useinfomof = (event) => {
    setuserinfomation({
      ...useinfomation,
      [event.target.name]: event.target.value,
    });
  }; //useinfo 함수에다가 값이변경될경우 바로바로 적용되게만듬

  const submituserinfo = () => {
    //수정완료버튼을 누르면 실행
    fetch(process.env.REACT_APP_SERVER_LOCAL + "/user/modify", {
      method: "PUT", //put 방식으로 보내서 db의 값을 변경시킴
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(useinfomation),
    })
      .then((response) => {
        if (response.ok) {
          alert("성공적으로 변경하였습니다.");
          togle(); //disabled를 활성화시켜서 변화시키지 못하도록함.
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const completeHandler = (data) => {
    setuserinfomation({ ...useinfomation, add1: data.roadAddress }); //주소를 user에 저장해줌.
    isopne(); //주소록 api모달을 종료시킴.
  };

  const constr = {
    width: "30%",
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "500px",
      height: "200px",
      padding: "0",
      overflow: "hidden",
    },
  };
  const postcustomStyles = {
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
  return (
    <div>
      <Container style={constr}>
        <Row>
          <Col
            style={{
              fontSize: "40px",
              fontFamily: "Orbit",
              margin: "40px 0 40px",
              textAlign: "center",
            }}
          >
            회원 정보
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label htmlFor="name">이름</Label>
                <Input
                  type="text"
                  className="form-control"
                  name="name"
                  value={useinfomation.name}
                  disabled={reonly}
                  onChange={useinfomof}
                />
              </FormGroup>
              <br />
              <FormGroup>
                <Label htmlFor="email">이메일</Label>
                <Input
                  type="email"
                  className="form-control"
                  name="email"
                  value={useinfomation.email}
                  disabled={reonly}
                  onChange={useinfomof}
                />
                <br />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="add2">주소</Label>
                <br />
                <input
                  className="form-control"
                  value={useinfomation.add1}
                  name="add1"
                  disabled={reonly}
                  onChange={useinfomof}
                />
                <Col>
                  {!reonly && (
                    <input
                      type="button"
                      className="btn btn-inverse waves-effect waves-light"
                      value={"우편번호검색"}
                      onClick={isopne}
                    />
                  )}
                </Col>
                <Modal
                  style={postcustomStyles}
                  isOpen={isOpen}
                  ariaHideApp={false}
                >
                  <DaumPostcode onComplete={completeHandler} />
                  <button
                    style={{ marginLeft: "200px" }}
                    className="btn btn-inverse waves-effect waves-light"
                    onClick={isopne}
                  >
                    닫기
                  </button>
                </Modal>
                <br />
                <input
                  className="form-control"
                  type="text"
                  name="add2"
                  value={useinfomation.add2}
                  disabled={reonly}
                  onChange={useinfomof}
                />
              </FormGroup>
              <Label>전화번호</Label>
              <Container>
                <Row md="10" style={{ width: "100%", textAlign: "center" }}>
                  <Col md="4">
                    <Input
                      type="text"
                      maxLength={"3"}
                      className="form-control"
                      value={useinfomation.p_num1}
                      name="p_num1"
                      onChange={useinfomof}
                      disabled={reonly}
                    />
                  </Col>
                  <Col md="4">
                    <Input
                      type="text"
                      maxLength={"4"}
                      className="form-control"
                      name="p_num2"
                      value={useinfomation.p_num2}
                      onChange={useinfomof}
                      disabled={reonly}
                    />
                  </Col>
                  <Col md="4">
                    <Input
                      type="text"
                      maxLength={"4"}
                      className="form-control"
                      name="p_num3"
                      value={useinfomation.p_num3}
                      onChange={useinfomof}
                      disabled={reonly}
                    />
                  </Col>
                </Row>
              </Container>
              <br />
              <br />
              <Col style={{ textAlign: "center" }}>
                {reonly && (
                  <input
                    type="button"
                    className="btn btn-success waves-effect waves-light m-r-10"
                    value={"수정"}
                    onClick={usermodify}
                  />
                )}
                {!reonly && (
                  <input
                    type="button"
                    className="btn btn-success waves-effect waves-light m-r-10"
                    value={"수정하기"}
                    onClick={submituserinfo}
                  />
                )}
                {!reonly && (
                  <input
                    type="button"
                    className="btn btn-success waves-effect waves-light m-r-10"
                    value={"취소"}
                    onClick={togle}
                  />
                )}
              </Col>
              <br />
              <br />
            </Form>
          </Col>
        </Row>
      </Container>
      <Modal style={customStyles} isOpen={modalop}>
        <Row>
          <Col md={4}></Col>
          <Col md={6} style={{ fontSize: "25px" }}>
            비밀번호 체크
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Form>
            <FormGroup>
              <Label htmlFor="name">비밀번호</Label>
              <Input
                type="password"
                className="form-control"
                placeholder={"비밀번호를 입력해주십시오"}
                onChange={pwdcheck}
              />
            </FormGroup>
            <input
              type="button"
              className="btn btn-success waves-effect waves-light m-r-10"
              value={"확인"}
              onClick={pwdchecktow}
            />
            <input
              type="button"
              className="btn btn-success waves-effect waves-light m-r-10"
              value={"취소"}
              onClick={usermodify}
            />
          </Form>
        </Row>
      </Modal>
    </div>
  );
};

export default Userinfo;
