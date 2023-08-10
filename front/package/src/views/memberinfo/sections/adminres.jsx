import React, { useEffect, useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import { Col, Container, Row } from 'reactstrap';
import Adminprice from "./adminprice";



const Adminres = () => {

    const [totReservation, setreservation] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        fetch("http://localhost:8095/admin/reservation")
            .then((response) => {
                return response.json();
            }).then((data) => {
                setreservation(data);
            })
    }

    const TotalReservation = () => {

        if (totReservation.length !== undefined) {
            return (
                totReservation.map((Res, index) => (//map방식을 사용하여 존재하는 값만큼 반복함 roomlist에저장된값만큼 for을 사용한다고 보면됌.
                    <Row key={index}>
                        <Col>
                            {Res.res_num.reservation_num}
                        </Col>
                        <Col>
                            {Res.res_num.r_num.r_num}
                        </Col>
                        <Col>
                            {Res.res_num.r_num.r_type}
                        </Col>
                        <Col>
                            {new Date(Res.res_num.check_in).toLocaleDateString()}
                        </Col>
                        <Col>

                            {new Date(Res.res_num.check_out).toLocaleDateString()}
                        </Col>
                        {Object.keys(Res).filter(key => key.startsWith("imt")).map(optionKey => (
                            <Col key={optionKey}>
                                <p>{Res[optionKey].option_content}</p>
                            </Col>
                        ))
                        }
                        <Col>
                            {Res.res_num.total_price}
                        </Col>
                    </Row >

                ))
            )
        } else {
            return (
                <Row >
                    <Col>
                    </Col>
                    <Col>
                        예약된 내역이 없습니다.
                    </Col>
                    <Col>
                    </Col>
                </Row>

            )
        }
    }


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
                </Row>
                <hr />
                <br />
                <TotalReservation />
                <hr />
                <Adminprice />
            </Container>

        </>
    )
}


export default Adminres;