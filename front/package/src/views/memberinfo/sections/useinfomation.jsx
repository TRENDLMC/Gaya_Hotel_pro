import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import DaumPostcode from 'react-daum-postcode';
import Modal from "react-modal";

const Userinfo = () => {

    const [useinfomation, setuserinfomation] = useState([]);
    const [reonly, setreonly] = useState(true);
    const [modalop, setmodal] = useState(false);
    const [pwd, setpwd] = useState("");

    const togle = () => {
        setreonly(!reonly);
    }

    const usermodify = () => {
        setmodal(!modalop);
    }

    useEffect(() => {
        let moduserinfo = {
            id: sessionStorage.getItem("id"),
            pwd: pwd
        };
        fetch("http://localhost:8095/user/info", {
            method: "POST",//조회
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(moduserinfo),
        }).then((response) => {
            return response.json();
        }).then((date) => {
            setuserinfomation(date);
            console.log(date);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    const pwdcheck = (event) => {
        setpwd(event.target.value);
    }

    const pwdchecktow = () => {
        let moduserinfo = {
            id: sessionStorage.getItem("id"),
            pwd: pwd
        };

        fetch("http://localhost:8095/user/chepwd", {
            method: "POST",//조회
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(moduserinfo),
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((date) => {
            if (date === 1) {
                togle();
                usermodify();
            } else {
                alert("비밀번호가 일치하지 않습니다.");
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    const useinfomof = (event) => {
        setuserinfomation({ ...useinfomation, [event.target.name]: event.target.value });
    }

    const submituserinfo = () => {
        console.log(useinfomation);
        fetch("http://localhost:8095/user/modify", {
            method: "PUT",//조회
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(useinfomation),
        }).then((response) => {
            if (response.ok) {
                alert("성공적으로 변경하였습니다.");
                togle();
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    const constr = {
        width: "30%",
    }
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
    return (
        <div>
            <Container style={constr} >
                <Row >
                    <Col>
                        <Form>
                            <FormGroup >
                                <Label htmlFor="name">이름</Label>
                                <Input type="text" className="form-control" name="name" value={useinfomation.name} disabled={reonly} onChange={useinfomof} />
                            </FormGroup>
                            <br />
                            <FormGroup >
                                <Label htmlFor="email">이메일</Label>
                                <Input type="email" className="form-control" name="email" value={useinfomation.email} disabled={reonly} onChange={useinfomof} />
                                <br />
                            </FormGroup>
                            <FormGroup >
                                <Label htmlFor="add2">주소</Label>
                                <br />
                                <input className="form-control" value={useinfomation.add1} name="add1" disabled={reonly} onChange={useinfomof} />
                                <Col>
                                    {!reonly && <input type='button' className="btn btn-inverse waves-effect waves-light" value={"우편번호검색"} />}
                                </Col>
                                <Modal isOpen={false} ariaHideApp={false} >
                                    <DaumPostcode >
                                    </DaumPostcode>
                                    <button style={{ marginLeft: "200px" }} className="btn btn-inverse waves-effect waves-light" >닫기</button>
                                </Modal>
                                <br />
                                <input className="form-control" type="text" name="add2" value={useinfomation.add2} disabled={reonly} />
                            </FormGroup>
                            <Label>전화번호</Label>
                            <Container>
                                <Row md="10" style={{ width: "100%", textAlign: "center" }}>
                                    <Col md="4">
                                        <Input type="text" maxLength={"3"} className="form-control" value={useinfomation.p_num1} name="p_num1" onChange={useinfomof} disabled={reonly} />
                                    </Col>
                                    <Col md="4">
                                        <Input type="text" maxLength={"4"} className="form-control" name="p_num2" value={useinfomation.p_num2} onChange={useinfomof} disabled={reonly} />
                                    </Col>
                                    <Col md="4">
                                        <Input type="text" maxLength={"4"} className="form-control" name="p_num3" value={useinfomation.p_num3} onChange={useinfomof} disabled={reonly} />
                                    </Col>
                                </Row>
                            </Container>
                            <br /><br />
                            <Col style={{ textAlign: "center" }}>
                                {reonly && <input type='button' className="btn btn-success waves-effect waves-light m-r-10" value={"수정"} onClick={usermodify} />}
                                {!reonly && <input type='button' className="btn btn-success waves-effect waves-light m-r-10" value={"수정하기"} onClick={submituserinfo} />}
                                {!reonly && <input type='button' className="btn btn-success waves-effect waves-light m-r-10" value={"취소"} onClick={togle} />}
                            </Col>
                            <br /><br />
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
                        <FormGroup >
                            <Label htmlFor="name">비밀번호</Label>
                            <Input type="password" className="form-control" placeholder={"비밀번호를 입력해주십시오"} onChange={pwdcheck} />
                        </FormGroup>
                        <input type='button' className="btn btn-success waves-effect waves-light m-r-10" value={"확인"} onClick={pwdchecktow} />
                        <input type='button' className="btn btn-success waves-effect waves-light m-r-10" value={"취소"} onClick={usermodify} />
                    </Form>
                </Row>
            </Modal>
        </div>
    );
}


export default Userinfo;