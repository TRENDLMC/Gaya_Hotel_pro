import React, { useState } from "react";
import { Col, Container, Row } from 'reactstrap';
import Adminres from "./adminres";


const Adminform = () => {
    const [resopne, setresopne] = useState(true);
    const [useropne, setuseropne] = useState(false);
    const [notice, setnotice] = useState(false);
    const [price, setprice] = useState(false);

    const resbtn = () => {
        setresopne(true);
        setuseropne(false);
        setnotice(false);
        setprice(false);
    }

    const usebtn = () => {
        setresopne(false);
        setuseropne(true);
        setnotice(false);
        setprice(false);
    }
    const noticebtn = () => {
        setresopne(false);
        setuseropne(false);
        setnotice(true);
        setprice(false);
    }
    const pricebtn = () => {
        setresopne(false);
        setuseropne(false);
        setnotice(false);
        setprice(true);
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
                    <input type='button' onClick={usebtn} value={"총매출확인"} />
                    <hr />
                </Col>
                <Col>
                    <input type='button' onClick={noticebtn} value={"공지사항"} />
                    <hr />
                </Col>
                <Col>
                    <input type='button' onClick={pricebtn} value={"회원조회"} />
                    <hr />
                </Col>
            </Container>
            {price && <div></div>}
            {resopne && <Adminres />}
            {useropne && <div></div>}
            {notice && <div></div>}
        </div >
    )
}



export default Adminform;