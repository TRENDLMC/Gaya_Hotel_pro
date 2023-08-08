import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from 'reactstrap';



const Readreservation = () => {
    const [Reservation, setreservation] = useState([]);

    const [modelon, setmodalon] = useState(false);

    const btn_togle = () => {
        setmodalon(!modelon);
    }

    useEffect(() => {
        var moduserinfo = {
            id: sessionStorage.getItem("id"),
        }
        fetch("http://localhost:8095/user/mypage", {
            method: "POST",//조회
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(moduserinfo),
        }).then((response) => {
            return response.json();
        }).then((date) => {
            setreservation(date);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const Reservationlist = Reservation.map((room) => (//map방식을 사용하여 존재하는 값만큼 반복함 roomlist에저장된값만큼 for을 사용한다고 보면됌.
        <Row>
            <Col>
                {room.reservation_num}
            </Col>
            <Col>
                {room.check_in}
            </Col>
            <Col>
                {room.check_out}
            </Col>
            <Col>
                {room.option_code}
            </Col>
            <Col>
                {room.total_price}
            </Col>
            <Col>
                <input type="button" onClick={btn_togle} value={"리뷰작성"}></input>
            </Col>
        </Row>
    ));

    return (
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
                    리뷰작성
                </Col>
            </Row>
            <hr /><br /><br />
            <br /><br />
            {Reservation.length === 0 && <Row><Col></Col><Col>예약된 내역이 없습니다.</Col><Col></Col></Row>}
            {Reservation.length !== 0 && Reservationlist}
            <Modal>
                <input type="text" name={"content"} />
                <input type="text" name={"starpoint"} />>
            </Modal>
        </Container>
    )
}


export default Readreservation;