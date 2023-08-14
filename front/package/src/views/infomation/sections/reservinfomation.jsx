import React from "react";
import { Col, Container, Row } from "reactstrap";


const Resrvinfomation = () => {

const ReservTitle = {
    textAlign:"center",
    margin:"auto"
}

  return (
    <div>
        <Container style={{marginLeft:"50px", marginBottom:"50px"}}>

        <Row style={{margin:"80px 0 80px"}}>
                <Col>
                    <Row>
                        <Col>
                            <h1 style={{textAlign:"center", fontSize:"40px", fontFamily:"Orbit"}}>예약 안내</h1>
                        </Col>
                    </Row>
                    <Row>
                        <hr style={{margin:"0 auto 4px", width:"200px", color:"#8f103d"} }/>
                    </Row>
                    <Row>
                        <hr style={{margin:"0 auto 4px", width:"200px", color:"#8f103d"} }/>
                    </Row>
                </Col>
            </Row>
        <hr style={{ margin: "auto"}}/>
        <br/><br/>

        <Row style={{padding:"0 30px 0 30px"}}>
            <Col md="3" style={ReservTitle}>입실/퇴실 시간 안내</Col>
            <Col md="9">- 입실 시간 : 오후 01시 부터<br/>- 퇴실 시간 : 오전 11시 까지</Col>
        </Row>
        <br/><br/>
        <hr style={{ margin: "auto"}}/>
        <br/><br/>
        <Row style={{padding:"0 30px 0 30px"}}> 
            <Col md="3" style={ReservTitle}>입실 안내</Col>
            <Col md="9">
                - 기준 인원 초과 시 1인당 30,000원의 추가 비용이 발생하며 침구 1채가 제공됩니다.<br/>
                &nbsp;&nbsp;(추가 침구 별도 요청 시 1채당 30,000원 추가 비용이 발생하며 최대 2채 제공 가능합니다.)<br/>
                - 객실 최대인원 초과 시 입실 불가합니다. (무단 입실 시, 익일 숙박료가 부과됩니다.)​<br/>
                - 8세 미만의 추가 인원은 추가요금에서 제외됩니다.<br/>
                - 회원님의 권리를 보장하기 위해 본인 확인 후 회원 본인이 아닐 경우에는 회원 추천 요금이<br/> &nbsp;&nbsp;적용됩니다.<br/>
                - 얼리 체크인시 별도의 요금이 부과됩니다.<br/>
                &nbsp;&nbsp;&nbsp;- 10:00 ~ 11:00 40,000원<br/>
                &nbsp;&nbsp;&nbsp;- 12:00 ~ 13:00 30,000원<br/>
                &nbsp;&nbsp;&nbsp;- 13:00 ~ 14:00 20,000원<br/>
                &nbsp;&nbsp;&nbsp;(얼리체크인은 전일 및 당일 객실이 있는 경우에 한합니다)<br/>
            </Col>
        </Row>
        <br/><br/>
        <hr style={{ margin: "auto"}}/>
        <br/><br/>
        <Row style={{padding:"0 30px 0 30px"}}>
            <Col md="3" style={ReservTitle}>퇴실 안내</Col>
            <Col md="9">
                - 다음 회원의 이용을 위하여 퇴실 시간을 준수해 주시기 바랍니다.<br/>
                - 퇴실 시간이 초과되는 경우 별도의 요금이 부과됩니다.<br/>
                - 퇴실시간 (11:00시 까지) 이후 객실 사용 시 추가요금 발생<br/>
                &nbsp;&nbsp;&nbsp;- 11:00 ~ 14:00 퇴실 시 객실료의 30%적용<br/>
                &nbsp;&nbsp;&nbsp;- 14:00 ~ 16:00 퇴실 시 객실료의 50%적용<br/>
                &nbsp;&nbsp;&nbsp;- 16:00 ~ 18:00 이후 퇴실 시 객실료의 100%적용<br/>
                - 퇴실 전 다음 고객을 위하여 주방 정리 및 쓰레기 분리수거를 꼭 부탁드립니다. 미정리 된 객실은<br/> &nbsp;&nbsp;추가 정비료가 발생될 수 있습니다.<br/>
                - 비품 및 기물 파손 시 퇴실 전 프런트로 접수해 주시기 바라며, 파손이 있을 경우 파손품에 대한 <br/> &nbsp;&nbsp;요금이 발생됩니다.<br/>
                - 객실 프런트 : 031-123-1234/ 구내전화 031 - 123 - 1235</Col>
        </Row>
        <br/><br/>
        <hr style={{ margin: "auto"}}/>
        <br/><br/>
        <Row style={{padding:"0 30px 0 30px"}}>
            <Col md="3" style={ReservTitle}>대여용품</Col>
            <Col md="9">
                - 아기침대 : 30,000원<br/>
                - 침대가드, 가습기, 식탁 전용 의자 : 무료<br/>
                - 대여용품은 조기 소진 시 대여가 불가할 수 있습니다.<br/>
                - 객실 구조 및 안전상의 사유로 침대가드가 제한될 수 있습니다. (4세초과 사용제한)<br/>
            </Col>
        </Row>
        <br/><br/>
        <hr style={{ margin: "auto"}}/>
        <br/><br/>
        <Row style={{padding:"0 30px 0 30px"}}>
            <Col md="3" style={ReservTitle}>추가요금</Col>
            <Col md="9">- 침구류 세트(1인) [구성 : 요, 이불, 베개] : 30,000원<br/> -객실 투숙 규정 인원 외 침구세트 추가는 최대 2채까지 제공가능합니다.</Col>
        </Row>
        
        <br/><br/>
        <hr style={{ margin: "auto"}}/>

        </Container>

    </div>

  );
};


export default Resrvinfomation;