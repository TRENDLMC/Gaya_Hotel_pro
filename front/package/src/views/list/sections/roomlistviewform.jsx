import { useEffect, useState } from 'react';
import Calendar from './calendar'
import Modal from "react-modal";
import { Container, Row, Col, Label, Card, CardTitle, CardText } from 'reactstrap';
import * as dayjs from "dayjs";
import { useNavigate } from "react-router-dom";


const DetailsReservation = () => {
    const [roomlist, setRoomlist] = useState([]); //위에서 서버로부터 받아온값을 저장하는 state
    let navigate12 = useNavigate();// usehistory사용할 변수이름 선언
    const [modalop, setModelop] = useState(false);//캘린더 모달 on off state
    const [listop, setListop] = useState(false);//방정보 표기 on off togle
    const [dateop, setdateop] = useState(false);//날짜정보 표기 on off togle

    const [calendarData, setCalendarData] = useState([null, null]);//calendar에서 값을 가져와서 저장시키는 곳
    const [check_in, check_out] = calendarData;//calendar에서 값을 가져와서 저장시키는 곳

    useEffect(() => {
        setdateop(false);//저장된값이 없으면 보지않게만들어주는 on off값
        setListop(false);//방정보를 표기해주는 togle값
        setCalendarData([null, null]);//이전에 있던값을 초기화시킴
    }, []);


    const ontogel = () => {
        setModelop(!modalop);//날짜 입력받기위해서 달력 modal을 켜주는 togle
        setdateop(true);//값을 입력받으면 날짜가 존재하기떄문에 사용자에게 날짜정보를 보여주도록 ture로 변경해서 보여줌
    }

    //아래는 날짜정보를 가져와서 두날짜사의 차값을구해서 총몇일 묵는지와같은 정보를 구하는 식
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


    const serchroom = () => {
        const chek = {
            check_in: dayjs(check_in).format('YYYY-MM-DD'),//가져온 데이터값을 전송하기전에 사용하기편한 형태로변환시킴 fotmat작업
            check_out: dayjs(check_out).format('YYYY-MM-DD')//마찬가지 값또한 db의 변수명과동일하게설정하여 vo사용이 가능하게만듬
        };
        fetch("http://localhost:8095/reser/datecheck", {//fetch로 연결된 서버로 전송함
            method: "POST",//전송 mapper를 설정
            headers: { "Content-Type": "application/json" },//값을 json형식으로 보내므로 headers에 전송값을 설정해줌
            body: JSON.stringify(chek),//보디에는 json형식으로 문자형으로 변경하여 위에서 저장한 값을 뿌려줌
        })
            .then((response) => {//성공시 서버에서 반환한 값을 json형태로변환
                // JSON 데이터를 파싱하고 반환된 Promise를 반환합니다.
                return response.json();
            })
            .then((data) => {
                // 이제 data 변수에 JSON 데이터가 저장되어 있습니다.
                setRoomlist(data);// json데이터를 usestate에 통채로저장시킴
                setListop(true);//가져온값을 출력해줄 화면을 true로 만들어서 클라이언트의 눈에보이도록만들어줌
            })
            .catch((err) => {
                alert(err);
            });
    }



    const Setroom = (prors) => {//위에서 가져온값마다 사진이 다르기때문에 그사진의 경로를 설정해서 뿌려주기위해서 빠로 기능을 하나만듬
        var img = "img" + prors.prors + ".jpg";//각방의 값을 넣어주고 확장자명을맞춰줌
        return (
            <img className="card-img-top" alt="wrappixel kit" src={require('../../../assets/images/roomlist/' + img)} />//이미지를 리턴시킴
        )
    }

    const Reservationpage = (event) => {//예약하기라는 버튼을 눌렀을때 반응
        var roominfo = {//세션하나에 여러개의 값을 저장하기위해서 json형식 즉 키값으로 데이터를 저장해줌 저장하는데이터는 예약상세페이지에서 필요한 체크인체크아웃및 방번호예약날짜등으로저장함
            check_in: dayjs(check_in).format('YYYY-MM-DD'),
            check_out: dayjs(check_out).format('YYYY-MM-DD'),
            r_num: event.target.name,
            total: checkDayResult
        }
        sessionStorage.setItem("roominfo", JSON.stringify(roominfo));//세선에 값을 roominfo라는 이름으로 저장함
        navigate12("/reservation");//그후 위에서 선언해준 navigate를 사용하여 바로 페이지를 전환시킴
    }

    const Roomlistview = roomlist.map((room) => (//map방식을 사용하여 존재하는 값만큼 반복함 roomlist에저장된값만큼 for을 사용한다고 보면됌.
        <Col md="4">
            <Card body className="card-shadow">
                <CardTitle>{room.r_type}</CardTitle>
                <CardText><Setroom prors={room.r_num} />< hr /><label style={{ fontSize: "20px" }}>적정 인원 : {room.r_size}</label><br />가격 : {room.r_price}</CardText>
                <input type='button' name={room.r_num} onClick={Reservationpage} value={"예약하러가기"} />
            </Card>
        </Col >
    )
    );

    //아래는 커스텀 css를 설정해주는 명령어들 
    const fonth1 = {
        marginTop: "30px",
        fontSize: "35px",
        color: "#333637",
        fontWeight: "bold",
    }
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
