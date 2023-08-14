import { Map } from 'react-kakao-maps-sdk';
import { Col, Container, Row } from 'reactstrap';

const Kakao = () => {
    //카카오 지도 api사용 index.html에서 script로 키값을 넣어주어 호출함
    return (
        <Container style={{marginLeft:"50px"}}>
            <Row style={{margin:"80px 0 80px"}}>
                <Col>
                    <Row>
                        <Col>
                            <h1 style={{textAlign:"center", fontSize:"40px", fontFamily:"Orbit"}}>오시는 길</h1>
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

                <div style={{ border: "1px solid", width: "700px", height: "700px", margin: "auto" }}>
                    <Map
                        center={{ lat: 37.3084, lng: 126.8510 }}   // 지도의 중심 좌표
                        style={{ height: '100%', width: "100%" }} // 지도 크기
                        level={3}                                   // 지도 확대 레벨
                    >
                    </Map>
                </div >

            <Row style={{margin:"40px 0 40px"}}>
                <Col>
                </Col>
                <Col style={{ 
                    fontSize: "20px",
                    textAlign: "center",
                    background:"#e2e2e2",
                    borderRadius:"10px"
                    }}
                    md="8">
                    <br />
                    상세주소<br />
                    <p></p>
                    주소: 경기도 안산시 상록구 광덕1로 375 KR 강우빌딩<br />
                    대중교통이용시 한대앞역 하차후 2번출구로 나와 200m전진
                    <br />
                    <br />
                </Col>
                <Col>
                </Col>
            </Row>
        </Container >
    );
};


export default Kakao;