import React, { Component, useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, ListGroup } from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate, useLocation } from "react-router-dom";

const LoginForm = () => {
  let navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    id: "",
    pwd: "",
  });

  const [isLogin, setIsLogin] = useState(false); //로그인 관리

  useEffect(() => {
    if (sessionStorage.getItem("id") === null) {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 없다면
      console.log("isLogin ?? :: ", isLogin);
    } else if (isLogin === true) {
      navigate("/");
    } else {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      console.log("isLogin ?? :: ", isLogin);
    }
  });

  const Login = async () => {
    if (loginInfo.id === "") {
      alert("아이디를 입력해주십시오");
      return;
    }
    if (loginInfo.pwd === "") {
      alert("비밀번호를 입력해주십시오");
      return;
    }

    console.log(JSON.stringify(loginInfo));

    fetch(process.env.REACT_APP_SERVER_LOCAL + "/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
        if (data === "??") {
          alert("로그인 실패.");
          window.location.reload();
        } else {
          alert("로그인 성공! 환영합니다." + loginInfo.id + " 님!");
          sessionStorage.setItem("token", data);
          sessionStorage.setItem("id", loginInfo.id); // sessionStorage에 id를 user_id라는 key 값으로 저장
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onChange = (event) => {
    setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
    console.log(loginInfo);
  };

  const ContainerStyles = {
    width: "500px",
  };

  return (
    <div>
      <div className="spacer" id="forms-component">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">로그인 페이지</h1>
              <h6 className="subtitle">아이디와 패스워드를 입력해주세요.</h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="spacer" id="forms-component">
        <Container style={ContainerStyles}>
          <Row>
            <Col className="col-md">
              <Form>
                <FormGroup className="col-md-12">
                  <Label htmlFor="id">아이디</Label>
                  <Input
                    type="text"
                    className="form-control"
                    name="id"
                    placeholder="Enter Username"
                    onChange={onChange}
                  />
                </FormGroup>

                <FormGroup className="col-md-12">
                  <Label htmlFor="password">패스워드</Label>
                  <Input
                    type="password"
                    className="form-control"
                    name="pwd"
                    placeholder="Password"
                    onChange={onChange}
                  />
                </FormGroup>

                <Col md="12" className="text-center">
                  <input
                    type="button"
                    onClick={Login}
                    className="btn btn-success waves-effect waves-light m-r-10 col-md-12"
                    value={"로그인"}
                  />
                </Col>
              </Form>
              <div>
                <p />
                <Input id="checkbox1" type="checkbox" />
                <Label htmlFor="checkbox1"> 아이디 저장 </Label>
                {/* <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   </span> */}

                <Container className="text-center">
                  <Link className="nav-link text-center" to={"/signup"}>
                    아직 회원이 아니신가요?
                  </Link>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginForm;
