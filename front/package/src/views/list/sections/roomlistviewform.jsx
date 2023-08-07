import { useEffect, useState } from 'react';
import Calendar from './calendar'
import Modal from "react-modal";
import { Container, Row, Col, Label, Card, CardTitle, CardText, Button } from 'reactstrap';
import * as dayjs from "dayjs";
import img101 from '../../../assets/images/roomlist/img101.jpg';
import img102 from '../../../assets/images/roomlist/img102.jpg';
import img103 from '../../../assets/images/roomlist/img103.jpg';
import img104 from '../../../assets/images/roomlist/img104.jpg';
import img105 from '../../../assets/images/roomlist/img105.jpg';
import img106 from '../../../assets/images/roomlist/img106.jpg';
import img107 from '../../../assets/images/roomlist/img107.jpg';
import img108 from '../../../assets/images/roomlist/img108.jpg';
import img109 from '../../../assets/images/roomlist/img109.jpg';
import img110 from '../../../assets/images/roomlist/img110.jpg';
import img111 from '../../../assets/images/roomlist/img111.jpg';
import img112 from '../../../assets/images/roomlist/img112.jpg';
import img113 from '../../../assets/images/roomlist/img113.jpg';
import img114 from '../../../assets/images/roomlist/img114.jpg';
import img115 from '../../../assets/images/roomlist/img115.jpg';
import img116 from '../../../assets/images/roomlist/img116.jpg';

const DetailsReservation = () => {
    const [calendarData, setCalendarData] = useState([null, null]);
    const [check_in, check_out] = calendarData;

    useEffect = () => {
        setdateop(false);
        setListop(false);
        setCalendarData([null, null]);
    }
    const [modalop, setModelop] = useState(false);
    const [listop, setListop] = useState(false);
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
            overflow: "hidden",
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
        fetch("http://localhost:8095/reser/datecheck", {
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
                setRoomlist(data);// JSON 데이터 출력
                console.log(data);
                console.log(data[0].r_num);
                setListop(true);
            })
            .catch((err) => {
                alert(err);
            });
    }
    const [roomlist, setRoomlist] = useState([]);
    const Setroom = (prors) => {
        var img = "img" + prors.prors + ".jpg";

        return (
            <img className="card-img-top" alt="wrappixel kit" src={require('../../../assets/images/roomlist/' + img)} />
        )
    }

    const Roomlistview =
        roomlist.map((room) => (
            <Col md="4">
                <Card body className="card-shadow">
                    <CardTitle>{room.r_type}</CardTitle>
                    <CardText><Setroom prors={room.r_num} />< hr /><label style={{ fontSize: "20px" }}>적정 인원 : {room.r_size}</label><br />가격 : {room.r_price}</CardText>
                    <Button>{room.r_num}</Button>
                </Card>
            </Col >
        )
        );
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
                    <input className="btn btn-info" style={{ marginLeft: "210px" }} type='button' value={"확인"} onClick={ontogel} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="btn btn-secondary" style={{}} type='button' value={"닫기"} onClick={ontogel} />
                </Modal>
            </div>

            {!listop && <div style={{ marginTop: "200px", fontSize: "30px", marginBottom: "200px" }} id="forms-component">
                <Container>
                    <Row md="20" className="justify-content-center">
                        <Col></Col>
                        <Col>조건을 입력해주십시오</Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>}
            {listop && <div style={{ marginTop: "200px", fontSize: "30px", marginBottom: "200px" }} id="forms-component">
                <Container>
                    <Row md="12">
                        {Roomlistview}
                    </Row>
                </Container>
            </div>}
        </div >
    );
};






export default DetailsReservation;
