import { useSearchParams } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { useEffect } from "react";

const SERVER_URL = "http://localhost:8095/";

export function SuccessPage() {
  const [searchParams] = useSearchParams();

  const insertReservation = () => {
    console.log("success 페이지");
    let tmp = JSON.parse(sessionStorage.getItem("reservinfo"));
    tmp.order_id = searchParams.get("orderId");
    // let tmp_id = tmp.id;
    // let tmp_r_rum = tmp.r_rum;
    tmp.id = { id: tmp.id };
    tmp.r_num = { r_num: tmp.r_num };
    console.log(tmp);

    fetch(SERVER_URL + "reser/reservation", {
      //fetch로 연결된 서버로 전송함
      method: "POST", //전송 mapper를 설정
      headers: { "Content-Type": "application/json" }, //값을 json형식으로 보내므로 headers에 전송값을 설정해줌
      body: JSON.stringify(tmp), //보디에는 json형식으로 문자형으로 변경하여 위에서 저장한 값을 뿌려줌
    })
      .then((response) => {
        //성공시 서버에서 반환한 값을 json형태로변환
        sessionStorage.removeItem("reservinfo");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    insertReservation();
  }, []);
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <Container>
            <Row> </Row>
            <Row>
              <Col></Col>
              <Col>
                <h1>결제 성공</h1>
                <div>{`주문 아이디: ${searchParams.get("orderId")}`}</div>
                <div>{`결제 금액: ${Number(
                  searchParams.get("amount")
                ).toLocaleString()}원`}</div>
              </Col>
              <Col></Col>
            </Row>
            <Row> </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}
