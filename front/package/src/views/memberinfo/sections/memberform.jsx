import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'reactstrap';
import Readreservation from "./reservation";
import Userinfo from "./useinfomation";



const Memberform = () => {

    const [resopne, setresopne] = useState(true);
    const [useropne, setuseropne] = useState(false);

    const resbutton = () => {
        setresopne(true);
        setuseropne(false);
    }
    const usebutton = () => {
        setresopne(false);
        setuseropne(true);
    }

    const boardstyle = {
        border: "5px solid",
        backgroundColor: "lightgreen",
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
                    <input type='button' onClick={resbutton} value={"예약조회/리뷰작성"} />
                    <hr />
                </Col>
                <Col>
                    <input type='button' onClick={usebutton} value={"개인정보조회"} />
                    <hr />
                </Col>
            </Container>
            {resopne && <Readreservation />}
            {useropne && <Userinfo />}
        </div >
    )
}








export default Memberform;