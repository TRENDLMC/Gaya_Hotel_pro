import React, { useState } from "react";
import { Col, Container, Row } from 'reactstrap';
import Adminres from "./adminres";
import Admintable from "./adminnotice";
import Adminuserinfo from "./adminuserinfo";


const Adminform = () => {
    const [resopne, setresopne] = useState(true);
    const [useropne, setuseropne] = useState(false);
    const [notice, setnotice] = useState(false);


    const resbtn = () => {
        setresopne(true);
        setuseropne(false);
        setnotice(false);
    }

    const usebtn = () => {
        setresopne(false);
        setuseropne(true);
        setnotice(false);
    }
    const noticebtn = () => {
        setresopne(false);
        setuseropne(false);
        setnotice(true);
    }
    const boardstyle = {
        border: "5px solid",
        backgroundColor: "#c2a575",
        color: "black",
        fontSize: "20px",
        width: "15%",
        float: "left"
    }

    return (
        <div>
            <div className="spacer" id="forms-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">마이 페이지</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container style={boardstyle} >
                <Col>
                    <hr />
                    <input type='button' onClick={resbtn} value={"예약정보조회"} />
                    <hr />
                </Col>
                <Col>
                    <input type='button' onClick={noticebtn} value={"공지사항"} />
                    <hr />
                </Col>
                <Col>
                    <input type='button' onClick={usebtn} value={"회원조회"} />
                    <hr />
                </Col>
            </Container>
            {resopne && <Adminres />}
            {useropne && <Adminuserinfo />}
            {notice && <Admintable />}
        </div >
    )
}



export default Adminform;