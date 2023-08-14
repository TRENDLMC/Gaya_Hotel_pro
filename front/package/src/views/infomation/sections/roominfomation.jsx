import React from "react";
import { Col, Container, Row } from "reactstrap";

import img101 from "../../../assets/images/roomlist/img101.jpg";
import img102 from "../../../assets/images/roomlist/img102.jpg";
import img103 from "../../../assets/images/roomlist/img103.jpg";
import img104 from "../../../assets/images/roomlist/img104.jpg";


const RoomInfomation = () => {

  return (
    <div>
      <Container style={{marginLeft:"50px"}}>
        <Row style={{margin:"80px 0 80px"}}>
          <Col>
            <Row>
              <Col>
              <h1 style={{textAlign:"center", fontSize:"40px", fontFamily:"Orbit"}}>방 소개</h1>
              </Col>
            </Row>
            <Row>
              <hr style={{margin:"0 auto 4px", width:"180px", color:"#8f103d"} }/>
            </Row>
            <Row>
              <hr style={{margin:"0 auto 4px", width:"180px", color:"#8f103d"} }/>
            </Row>
          </Col>
        </Row>
       
        <hr style={{ margin: "auto"}}/>
        {/* 디럭스 룸 */}
        <Row>
            <Col md="5">
                <img 
                    className="deluxeRoom"
                    src={img101}
                    alt="wrappixel kit"
                    height="267" 
                    width="374"
                 />
            </Col>
            <Col md="7" className="text-left" style={{paddingRight:"40px"}}>
              <h2 className="title" style={{margin:"50px 0 30px 0"}}>디럭스 룸 Deluxe Room</h2>
              <h6 className="subtitle">
              하루하루를 마지막이라고 생각하라. 그러면 예측할 수 없는 시간은 그대에게 더 많은 시간을 줄 것이다. - 호레스<br/>
              꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다. -괴테<br/>
              내일이란 오늘의 다른 이름일 뿐이다. -윌리엄 포크너
              </h6>
            </Col>
        </Row>
        <hr style={{ margin: "auto"}}/>
        <br/>
        <hr style={{ margin: "auto"}}/>

        {/* 스탠다드 룸 */}
        <Row>
            <Col md="5">
                <img 
                    className="standardRoom"
                    src={img102}
                    alt="wrappixel kit"
                    height="267" 
                    width="374"
                 />
            </Col>
            <Col md="7" className="text-left" style={{paddingRight:"40px"}}>
              <h2 className="title" style={{margin:"50px 0 30px 0"}}>스탠다드 룸 Standard Room</h2>
              <h6 className="subtitle">
              하루하루를 마지막이라고 생각하라. 그러면 예측할 수 없는 시간은 그대에게 더 많은 시간을 줄 것이다. - 호레스<br/>
              꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다. -괴테<br/>
              내일이란 오늘의 다른 이름일 뿐이다. -윌리엄 포크너
              </h6>
            </Col>
        </Row>

        <hr style={{ margin: "auto"}}/>
        <br/>
        <hr style={{ margin: "auto"}}/>

        {/* 패밀리 룸 */}
        <Row>
            <Col md="5">
                <img 
                    className="familyRoom"
                    src={img103}
                    alt="wrappixel kit"
                    height="267" 
                    width="374"
                 />
            </Col>
            <Col md="7" className="text-left" style={{paddingRight:"40px"}}>
              <h2 className="title" style={{margin:"50px 0 30px 0"}}>패밀리 룸 Family Room</h2>
              <h6 className="subtitle">
              하루하루를 마지막이라고 생각하라. 그러면 예측할 수 없는 시간은 그대에게 더 많은 시간을 줄 것이다. - 호레스<br/>
              꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다. -괴테<br/>
              내일이란 오늘의 다른 이름일 뿐이다. -윌리엄 포크너
              </h6>
            </Col>
        </Row>
        
        <hr style={{ margin: "auto"}}/>
        <br/>
        <hr style={{ margin: "auto"}}/>

        {/* 스위트 룸 */}
        <Row>
            <Col md="5">
                <img 
                    className="sweetRoom"
                    src={img104}
                    alt="wrappixel kit"
                    height="267" 
                    width="374"
                 />
            </Col>
            <Col md="7" className="text-left" style={{paddingRight:"40px"}}>
              <h2 className="title" style={{margin:"50px 0 30px 0"}}>스위트 룸 Sweet Room</h2>
              <h6 className="subtitle">
              하루하루를 마지막이라고 생각하라. 그러면 예측할 수 없는 시간은 그대에게 더 많은 시간을 줄 것이다. - 호레스<br/>
              꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다. -괴테<br/>
              내일이란 오늘의 다른 이름일 뿐이다. -윌리엄 포크너
              </h6>
            </Col>
        </Row>
        <hr style={{ margin: "auto"}}/>
      </Container>
      <br/>
      <br/>

    </div>

  );
};

export default RoomInfomation;
