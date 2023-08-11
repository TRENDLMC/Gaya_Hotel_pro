import React, { useEffect, useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import { Col, Container, Row } from 'reactstrap';
import Adminprice from "./adminprice";



const Adminres = () => {

    const [totReservation, setreservation] = useState([]);//예약정보를 저장해줌
    //전체 예약리스트를 가져오는 컴포넌트
    useEffect(() => {//처음에만실행함
        fetchData();//예약정보를 가져옴
    }, [])

    function fetchData() {
        fetch("http://localhost:8095/admin/reservation")//get방식이므로 따로정보를담아주지않음.
            .then((response) => {
                return response.json();
            }).then((data) => {
                setreservation(data);//파싱후 저장해줌
            })
    }

    const TotalReservation = () => {

        if (totReservation.length !== undefined) {//값의 존재여무 체크해줌 
            return (//리턴됀json의 형식이  리스트->맵형식으로 담겨있기때문에 파싱과정이 복잡함
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
                            {/* 값을 가져오면서문자형식으로dete가 변경되기떄문에 date타입으로 형변활을시켜줌. */}
                        </Col>
                        <Col>

                            {new Date(Res.res_num.check_out).toLocaleDateString()}
                        </Col>
                        <Row>
                            {Object.keys(Res).filter(key => key.startsWith("imt")).map(optionKey => (
                                <Col key={optionKey}>
                                    {Res[optionKey].option_content}
                                </Col>

                            ))
                            }
                        </Row>
                        <Col>
                            {Res.res_num.total_price}
                        </Col>
                        <Col>
                            {Res.res_num.user.id}
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
                    <Col>
                        예약자아이디
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