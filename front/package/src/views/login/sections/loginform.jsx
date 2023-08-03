import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Link,
} from "reactstrap";

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    id: "",
    password: "",
  });

  const login = () => {
    if (loginInfo.id === "") {
      alert("아이디를 입력해주십시오");
      return;
    }
    if (loginInfo.password === "") {
      alert("비밀번호를 입력해주십시오");
      return;
    }
    console.log(JSON.stringify(loginInfo));
    fetch("http://localhost:8095/test/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => {
        if (response.ok) {
          alert("로그인 성공! 환영합니다." + loginInfo.id + " 님!");
        } else {
          alert("로그인 실패. 다시 시도해 주세요");
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
          {/* <Row >
                        <Col md="12" >
                            <Form>
                                <FormGroup className="col-md-8 ">
                                    <Label htmlFor="id">아이디</Label>
                                    <Input type="text" className="form-control" name="id" placeholder="Enter Username" onChange={onChange}/>
                                </FormGroup>

                                <FormGroup className="col-md-8">
                                    <Label htmlFor="password">패스워드</Label>
                                    <Input type="password" className="form-control" name="password" placeholder="Password" onChange={onChange} />
                                </FormGroup>
                                
                                <FormGroup className="col-md-12 ml-3">
                                    <Input id="checkbox1" type="checkbox" />
                                    <Label htmlFor="checkbox1"> 아이디 저장 </Label>
                                </FormGroup>
                                <Col md="12" className="text-center">
                                    <input type='button' onClick={login} className="btn btn-success waves-effect waves-light m-r-10" value={"로그인"}/>
                                </Col>
                            </Form>
                        </Col>
                    </Row> */}

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
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                  />
                </FormGroup>

                <Col md="12" className="text-center">
                  <input
                    type="button"
                    onClick={login}
                    className="btn btn-success waves-effect waves-light m-r-10 col-md-12"
                    value={"로그인"}
                  />
                </Col>
              </Form>
              <div>
                <p />
                <Input id="checkbox1" type="checkbox" />
                <Label htmlFor="checkbox1"> 아이디 저장 </Label>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <a href="../signup/signup.jsx">아직 회원이 아니신가요?</a>
                {/* <Link className="nav-link" to={"/reservation"}>
                  아직 회원이 아니신가요?
                </Link> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginForm;
