import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, } from 'reactstrap';
import DaumPostcode from 'react-daum-postcode';
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const PageForm = () => {
    let navigate = useNavigate();

    const [zipCode, setZipcode] = useState(""); //카카오지도 api에서 가져온값을 저장하는 state
    const [roadAddress, setRoadAddress] = useState("");  // 카카오지도 api에서 가져온값을 저장하는 state
    const [isOpen, setIsOpen] = useState(false); //모달창을 띄우는 togle형 버튼

    const completeHandler = (data) => {
        setZipcode(data.zonecode);
        setRoadAddress(data.roadAddress);
        setUser({ ...user, add1: data.roadAddress });//주소를 user에 저장해줌.
        setIsOpen(false); //추가
    }

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


    // 검색 클릭
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const [user, setUser] = useState({//서버에 보내기위해 약속한 Swagger 형식에맞춰 state를 만들어둠. json형식
        id: "",
        add1: "",
        add2: "",
        email: "",
        name: "",
        p_num1: "",
        p_num2: "",
        p_num3: "",
        pwd: "",
    })

    const onChange = (event) => {//입력한값이 변경되면 반응하여 바로바로 state의값을변경해줌.
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const [pwdch, setPwdch] = useState({//비밀번호 체크하기위해서 만든 state
        firstpwd: "",
        pwdcheck: false,
    });

    const pwdcheck = (event) => {//마찬가지로 변경이있으면 바로바로 입력받아줌
        setPwdch({ ...pwdch, [event.target.name]: event.target.value });
    };

    const [pwdop, setPwdop] = useState(false);//값의 출력과 숨김을 담당하는 togle형식의 state 두개의 값이일치시 실행
    const [pwdfa, setPwdfa] = useState(false);//값의 출력과 숨김을 담당하는 togle형식의 state 두개의값이 비일치시 실행

    const pwdchecked = (event) => {
        if (pwdch.firstpwd === event.target.value) {//먼저 저장해둔값과 두번째 체크칸에입력된값을 onchange를 사용하여 실시간으로비교
            setPwdch({ ...pwdch, pwdcheck: true });//일치할시 pwdch에 값을 ture로변경하여 아래에서 서버로데이터를 보낼떄 체크함
            setUser({ ...user, pwd: event.target.value });//두개의값이일치하므로 서버에 보낼값에다가 대입해줌
            setPwdop(true);//두개의값이일치할시 실행되는 togle의값을 on으로변경
            setPwdfa(false);//두개의값이 틀릴시실행되는 togle의값을 off로 변경
        } else {
            setPwdch({ ...pwdch, pwdcheck: false });//아래의 서버로 데이터를 보낼수없게 false값으로변경시킴
            setUser({ ...user, pwd: "" });// 변경되었을때 삽입된값이 기억되지않도록 초기화시킴
            setPwdop(false);
            setPwdfa(true);
        }

    }

    const adduser = () => {
        if (!idchecktogle) {
            alert("아이디 중복체크를 진행해주십시오.");
            return;
        }
        if (user.id === "") {//필수입력값들이 null인지 아닌지 판단하여 리턴을 시킴
            alert("아이디를 입력해주십시오");
            return;
        }
        if (!pwdch.pwdcheck) {//저장된값을 true이므로 반전연산자를사용하여 true일경우 false로변경시켜 통과하게함
            alert("비밀번호를 체크하십시오");
            return;
        }
        if (user.pwd === "") {
            alert("비밀번호를 입력해주십시오");
            return;
        }
        if (user.p_num1 === "") {
            alert("번호를입력해주십시오");
            return;
        }
        if (user.p_num2 === "") {
            alert("번호를입력해주십시오 ");
            return;
        }
        if (user.p_num3 === "") {
            alert("번호를입력해주십시오 ");
            return;
        }
        if (user.name === "") {
            alert("이름를 입력해주십시오");
            return;
        }

        if (user.add1 === "") {
            alert("주소를 검색해주십시오");
            return;
        }

        if (user.add2 === "") {
            alert("상세주소를 입력해주십시오");
            return;
        }
        fetch(process.env.REACT_APP_SERVER_LOCAL + "/user/join", {//경로
            method: "POST",//insert이므로 post방식으로 보냄
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((response) => {
                if (response.ok) {
                    alert("정상적으로 회원가입이 완료되었습니다.");//회원가입완료시 클라이언트에게 메세지출력
                    navigate("/login");//그후 로그인페이지로 자동으로 이동시킴
                } else {
                    alert("실패")
                }
            })
            .catch((err) => {
                alert("실패")
            });
    }
    const [idchecktogle, setidchecktogle] = useState(false);
    const [idcheckfalsetogle, setidcheckfalsetogle] = useState(false);
    const idcheck = () => {//아이디 중복체크기능 
        let id = {
            id: user.id
        }//아이디만 저장하여 json형식으로 보낼준비
        fetch(process.env.REACT_APP_SERVER_LOCAL + "/user/idcheck", {
            method: "POST",//조회
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(id),
        })
            .then((response) => {
                return response.json();
            }).then((date) => {
                console.log(date);
                if (date === 0) {//받아온값이 0일경우 사용가능한아이디를 표시해줌
                    alert("사용 가능한 아이디입니다.");
                    setidchecktogle(true);
                    setidcheckfalsetogle(false);
                } else {
                    alert("사용이 불가능한 아이디입니다.")
                    //받아온값이 1일경우 사용불가능하다고 표시 해줌
                    setidchecktogle(false);
                    setidcheckfalsetogle(true);
                }
            })
            .catch((err) => {
                alert("실패")
            });
    }
    const constr = {
        width: "30%",
    }

    return (
        <div>
            <div className="spacer" id="forms-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">회원가입</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container style={constr}>
                <Row >
                    <Col>
                        <Form>
                            <FormGroup >
                                <Label htmlFor="id">*아이디&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;*항목은 필수입력항목입니다.</Label>
                                <Row>
                                    <Col md="8">
                                        <Input type="text" className="form-control" id="id" name="id" placeholder="아이디를 입력해주세요" onChange={onChange} /><br></br>
                                        {idchecktogle && <span style={{ color: "green" }}>사용가능한 아이디입니다.</span>}
                                        {idcheckfalsetogle && <span style={{ color: "red" }}>사용 불가능한 아이디입니다.</span>}
                                    </Col>
                                    <Col>
                                        <input type='button' className="btn btn-inverse waves-effect waves-light" value={"아이디중복체크"} onClick={idcheck} />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup >
                                <Label htmlFor="name">*이름</Label>
                                <Input type="text" className="form-control" id="name" name="name" placeholder="이름을 입력해주세요" onChange={onChange} />
                            </FormGroup>
                            <br />
                            <FormGroup >
                                <Label htmlFor="password">*비밀번호</Label>
                                <Input type="password" className="form-control" name="firstpwd" placeholder="6자리를 입력해주십시오" onChange={pwdcheck} />
                            </FormGroup>
                            <FormGroup >
                                <Label htmlFor="confirmpwd">*비밀번호 체크</Label>
                                <Input type="password" className="form-control" placeholder="비밀번호 체크" name='lastpwd' onChange={pwdchecked} />
                                {pwdop && <span style={{ color: "green" }}>일치 합니다.</span>}
                                {pwdfa && <span style={{ color: "red" }}>일치 하지 않습니다.</span>}
                            </FormGroup>
                            <br />
                            <FormGroup >
                                <Label htmlFor="email">이메일</Label>
                                <Input type="email" className="form-control" id="email" name="email" placeholder="이메일을 입력해주세요" onChange={onChange} />
                                <br />
                            </FormGroup>
                            <FormGroup >
                                <Label htmlFor="add2">*주소</Label>
                                <Row>
                                    <Col md="8">
                                        <input className="form-control" value={zipCode} readOnly placeholder="우편번호" />
                                    </Col>
                                    <Col>
                                        <input type='button' className="btn btn-inverse waves-effect waves-light" onClick={toggle} value={"우편번호검색"} />
                                    </Col>
                                </Row>
                                <br />
                                <input className="form-control" value={roadAddress} readOnly placeholder="도로명 주소" name="add1" onChange={onChange} />
                                <Modal isOpen={isOpen} ariaHideApp={false} style={customStyles}>
                                    <DaumPostcode onComplete={completeHandler} >
                                    </DaumPostcode>
                                    <button style={{ marginLeft: "200px" }} className="btn btn-inverse waves-effect waves-light" onClick={toggle}>닫기</button>
                                </Modal>
                                <br />
                                <input className="form-control" type="text" name="add2" placeholder="상세주소" onChange={onChange} />
                            </FormGroup>
                            <br />
                            <FormGroup className="col-md-12">
                                <Label>*전화번호</Label>
                                <Container>
                                    <Row md="10" style={{ width: "100%", textAlign: "center" }}>
                                        <Col md="4">
                                            <Input type="text" maxLength={"3"} className="form-control" name="p_num1" placeholder='*^ㅁ^*' onChange={onChange} />
                                        </Col>
                                        <Col md="4">
                                            <Input type="text" maxLength={"4"} className="form-control" name="p_num2" placeholder="1234" onChange={onChange} />
                                        </Col>
                                        <Col md="4">
                                            <Input type="text" maxLength={"4"} className="form-control" name="p_num3" placeholder="1234" onChange={onChange} />
                                        </Col>
                                    </Row>
                                </Container>
                            </FormGroup>
                            <br /><br />
                            <Col style={{ textAlign: "center" }}>
                                <input type='button' onClick={adduser} className="btn btn-success waves-effect waves-light m-r-10" value={"회원가입"} />

                                <input type='button' className="btn btn-inverse waves-effect waves-light" value={"뒤로가기"} />
                            </Col>
                            <br /><br />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageForm;
