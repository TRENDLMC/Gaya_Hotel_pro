import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from 'reactstrap';
import StarRating from "./starpont";



const Readreservation = () => {
    const [Reservation, setreservation] = useState([]);
    const [restarpont, setstarpont] = useState()
    const [reviewcon, setreviewcon] = useState("");
    const [modelon, setmodalon] = useState(false);
    const [temnum, settemnum] = useState("");

    const reviewchange = (event) => {
        setreviewcon(event.target.value);
    }

    const btn_togle = (event) => {
        setmodalon(!modelon);
        settemnum(event.target.id);
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
    const Reservationlist = () => {
        if (Reservation.length !== undefined) {
            return (
                Reservation.map((Res, index) => (//map방식을 사용하여 존재하는 값만큼 반복함 roomlist에저장된값만큼 for을 사용한다고 보면됌.
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
                        <Col>
                            <input type="button" id={index} onClick={btn_togle} value={"리뷰작성"}></input>
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




    const addreview = () => {
        var reviwe = {
            content: reviewcon,
            starpoint: restarpont,
            id: { id: sessionStorage.getItem("id") },
            r_num: { r_num: Reservation[temnum].res_num.r_num.r_num },
            reservation_num: { reservation_num: Reservation[temnum].res_num.reservation_num }
        }
        console.log(JSON.stringify(reviwe));
        fetch("http://localhost:8095/review/write", {
            method: "POST",//조회
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reviwe),
        }).then((response) => {
            if (response.ok) {
                alert("리뷰 작성되었습니다.");
                setmodalon(!modelon);
            } else {
                alert("실패")
            }
        }).catch((err) => {
            console.log(err);
        });
    }








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
                    리뷰작성
                </Col>
            </Row>
            <hr /><br /><br />
            <br /><br />

            <Reservationlist />

            <Modal style={customStyles} isOpen={modelon}>
                <Container>
                    <Row>
                        <Col></Col><Col style={{ fontSize: "25px" }}>리뷰작성 </Col><Col></Col>
                    </Row>
                    <Row>
                        <Col md={2} style={{ fontSize: "25px" }}>
                            리뷰
                        </Col>
                        <Col>
                            <input type="text" onChange={reviewchange} style={{ width: "90%" }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                        </Col>
                        <Col md={7}>
                            <StarRating setreview={setstarpont} />
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <input type="button" value={"작성"} onClick={addreview} />
                        </Col>
                        <Col>
                            <input type="button" value={"취소"} onClick={btn_togle} />
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Modal>
        </Container >
    )
}


export default Readreservation;