import { Map } from 'react-kakao-maps-sdk';

const Kakao = () => {
    return (
        <div style={{ border: "1px solid", width: "500px", height: "500px", margin: "auto" }}>
            <Map
                center={{ lat: 37.3084, lng: 126.8510 }}   // 지도의 중심 좌표
                style={{ height: '100%', width: "100%" }} // 지도 크기
                level={3}                                   // 지도 확대 레벨
            >
            </Map>
        </div >
    );
};


export default Kakao;