import React, { useEffect, useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import { Col, Container, Row } from 'reactstrap';
import Adminprice from "./adminprice";



const Adminres = () => {
    const [totReservation, setReservation] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await fetch("http://localhost:8095/admin/reservation");
            const data = await response.json();
            setReservation(data);
        } catch (error) {
            console.error("Error fetching reservation data:", error);
        }
    }

    const renderOptionColumns = (options) => {
        return Object.keys(options)
            .filter(key => key.startsWith("imt"))
            .map(optionKey => (
                <Col key={optionKey}>
                    {options[optionKey].option_content}
                </Col>
            ));
    };

    const RenderReservationRows = () => {
        if (totReservation.length > 0) {
            return totReservation.map((Res, index) => (
                <Row key={index}>
                    <Col>{Res.res_num.reservation_num}</Col>
                    <Col>{Res.res_num.r_num.r_num}</Col>
                    <Col>{Res.res_num.r_num.r_type}</Col>
                    <Col>{new Date(Res.res_num.check_in).toLocaleDateString()}</Col>
                    <Col>{new Date(Res.res_num.check_out).toLocaleDateString()}</Col>
                    {renderOptionColumns(Res)}
                    <Col>{Res.res_num.total_price}</Col>
                    <Col>{Res.res_num.id.id}</Col>
                </Row>
            ));
        } else {
            return (
                <Row>
                    <Col></Col>
                    <Col>예약된 내역이 없습니다.</Col>
                    <Col></Col>
                </Row>
            );
        }
    };



    return (
        <>
            <Container style={{ marginBottom: "200px" }}>
                <Row>
                    <Col>
                        예약내역
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        예약번호
                    </Col>
                    <Col>
                        방번호
                    </Col>
                    <Col>
                        방등급
                    </Col>
                    <Col>
                        체크인
                    </Col>
                    <Col>
                        체크아웃
                    </Col>
                    <Col>
                        옵션
                    </Col>
                    <Col>
                        총결제금액
                    </Col>
                    <Col>
                        예약자아이디
                    </Col>
                </Row>
                <hr />
                <br />
                <RenderReservationRows />
                <hr />
                <Adminprice />
            </Container>

        </>
    )
}


export default Adminres;