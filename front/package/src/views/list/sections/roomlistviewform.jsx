import { useEffect, useState } from 'react';
import Calendar from './calendar'
import Modal from "react-modal";
import { Container, Row, Col, Label, } from 'reactstrap';
import * as dayjs from "dayjs";

const DetailsReservation = ({ roomDetailData }) => {
    const [calendarData, setCalendarData] = useState([null, null]);
    const [check_in, check_out] = calendarData;

    useEffect = () => {
        setdateop(false);
    }
    const [modalop, setModelop] = useState(false);

    const [dateop, setdateop] = useState(false);

    const ontogel = () => {
        setModelop(!modalop);
        setdateop(true);
    }

    const checkInDate =
        check_in != null && check_in.toLocaleString().split(' 오전')[0];
    const checkOutDate =
        check_out != null && check_out.toLocaleString().split(' 오전')[0];

    const checkStartDate =
        checkInDate &&
        checkInDate.split('. 오전')[0].replaceAll('. ', '-').slice(0, -1);
    const checkEndDate =
        checkOutDate &&
        checkOutDate.split('. 오전')[0].replaceAll('. ', '-').slice(0, -1);

    const start = new Date(checkStartDate).getTime();
    const end = new Date(checkEndDate).getTime();

    const checkDayResult = (end - start) / (1000 * 60 * 60 * 24);

    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
        },
        content: {
            left: "0",
            margin: "auto",
            width: "658px",
            height: "350px",
            padding: "0",
            overflow: "auto",
        },
    };

    const styled = {
        marginTop: "50px",
        border: "5px solid #8f103d",
        borderColor: "#8f103d",
        color: "black",
        padding: "30px",
        width: "80%",
        margin: "auto"

    };
    const serchroom = () => {
        const chek = {
            check_in: dayjs(check_in).format('YYYY-MM-DD'),
            check_out: dayjs(check_out).format('YYYY-MM-DD')
        };
        console.log(JSON.stringify(chek));
        fetch("http://localhost:8095/dummy/datecheck", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(chek),
        })
            .then((response) => {
                // JSON 데이터를 파싱하고 반환된 Promise를 반환합니다.
                return response.json();
            })
            .then((data) => {
                // 이제 data 변수에 JSON 데이터가 저장되어 있습니다.
                console.log(data); // JSON 데이터 출력
                console.log(data[10].r_num); // 원하는 값 출력
            })
            .catch((err) => {
                alert("실패");
            });
    }
    const fonth1 = {
        marginTop: "30px",
        fontSize: "35px",
        color: "#333637",
        fontWeight: "bold",
    }
    return (
        <div>
            <Row style={fonth1} md="7" className="justify-content-center">
                <Col md="2" className="text-center">
                    <label>예&nbsp;&nbsp;&nbsp;약</label>
                </Col>
            </Row>
            <div id="forms-component">
                <Container>
                    <Row style={styled} md="7" className="justify-content-center">
                        <Col md="2" className="text-center">
                            <input type='button' style={{ marginTop: "5px" }} onClick={ontogel} className="btn btn-success waves-effect waves-light m-r-5 col-md-10" value={"날짜 검색"} />
                        </Col>
                        <Col md="2" className="text-center">
                            <Label>체크인날짜</Label>
                            <div>
                                {dateop && dayjs(check_in).format('YYYY-MM-DD')}
                            </div>
                        </Col>
                        <Col md="2" className="text-center">
                            <Label>체크아웃날짜</Label>
                            <div>{dateop && dayjs(check_out).format('YYYY-MM-DD')}</div>
                        </Col>
                        <Col md="2" className="text-center">
                            <Label>총숙박예정일</Label>
                            <div>{dateop && checkDayResult - 1}{dateop && "박"}{dateop && checkDayResult}{dateop && "일"} </div>
                        </Col>
                        <Col md="2" className="text-center">
                            <input type='button' style={{ marginTop: "5px" }} onClick={serchroom} className="btn btn-primary waves-effect waves-light m-r-5 col-md-10" value={"방 검색"} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Modal isOpen={modalop} ariaHideApp={false} style={customStyles}>
                    <Calendar setCalendarData={setCalendarData} />
                    <input style={{ marginLeft: "300px" }} type='button' value={"닫기"} onClick={ontogel} />
                </Modal>
            </div>
        </div >
    );
};
export default DetailsReservation;
