import { Card, CardBody, Col, Container, Row } from "reactstrap";
import img1 from '../../../assets/images/landingpage/vranov-castle-2-with-big-sky-picjumbo-com.jpg';
import { Link } from "react-router-dom";


export default function HotelRoominfomation() {

    return (
        <div className="spacer ">
            <Container className="feature30" style={{marginLeft:"50px"}}>
                <Row style={{margin:"0 0 50px 0", fontSize:"80px", fontFamily:"Orbit"}}>
                    <Col  >
                        <Row style={{textAlign:"center"}}>
                            <Col>
                                <span style={{color:"#8f103d",fontFamily:"Orbit"}}>가</span>야 
                                <span style={{color:"#c2a575",fontFamily:"Orbit"}}> 호</span>텔
                            </Col> 
                        </Row>
                        <Row>
                        <hr style={{margin:"0 auto 4px", width:"400px", color:"#8f103d"} }/>
                        </Row>
                        <Row>
                        <hr style={{margin:"0 auto 4px", width:"400px", color:"#8f103d"} }/>
                        </Row>
                    </Col>
                </Row>
                <Row style={{margin:"30px"}}>
                    <Col lg="5" md="7" className="text-center wrap-feature30-box" style={{top:"40%"}}>
                        <Card className="card-shadow">
                            <CardBody>
                                <div className="p-20">
                                    <h3 className="title">대한민국 한대앞역에 위치한 최고의호텔인 GaYaHotel</h3>
                                    <p>투숙객 분들에게 머무시는동안 인생최고의 서비스를 경험할수 있게 해드립니다.<br /> 지금당장 예약하세요.</p>
                                    <Link className="nav-link btn-gaya-gradiant btn" to={"/reservationlist"} >
                                        예약
                                    </Link>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                
                <Row>
                    <Col lg="10"><img src={img1} className="rounded img-responsive" alt="wrappixel" /></Col>
                </Row>
            </Container>
        </div>
    )
}