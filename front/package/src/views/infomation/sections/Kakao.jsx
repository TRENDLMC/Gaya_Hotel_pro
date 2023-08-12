import { Map } from 'react-kakao-maps-sdk';
import { Col, Container, Row } from 'reactstrap';

const Kakao = () => {
    //카카오 지도 api사용 index.html에서 script로 키값을 넣어주어 호출함
    return (
        <Container>
            <Row>
                <Col style={{ fontSize: "30px", textAlign: "center" }}>
                    찾아오시는 길
                </Col>
                <br />
                <br />
                <br />
                <br />
            </Row>
            <div style={{ border: "1px solid", width: "500px", height: "500px", margin: "auto" }}>
                <Map
                    center={{ lat: 37.3084, lng: 126.8510 }}   // 지도의 중심 좌표
                    style={{ height: '100%', width: "100%" }} // 지도 크기
                    level={3}                                   // 지도 확대 레벨
                >
                </Map>
            </div >
            <Row>
                <Col style={{ fontSize: "20px", textAlign: "center" }} >
                    <br />
                    상세주소<br />
                    주소: 경기도 안산시 상록구 광덕1로 375 KR 강우빌딩<br />
                    대중교통이용시 한대앞역 하차후 2번출구로 나와 200m전진
                    <br />
                    <br />
                </Col>
            </Row>
        </Container >
    );
};


export default Kakao;