import { useSearchParams } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function SuccessPage() {
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();
  const insertReservation = () => {
    console.log("success 페이지");
    let tmp = JSON.parse(sessionStorage.getItem("reservinfo"));
    tmp.order_id = searchParams.get("orderId");
    tmp.id = { id: tmp.id };
    tmp.r_num = { r_num: tmp.r_num };
    console.log(tmp);

    fetch(process.env.REACT_APP_SERVER_LOCAL + "/reser/reservation", {
      //fetch로 연결된 서버로 전송함df
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
            <Row
              style={{
                border: "1px solid #8f103d",
                width: "600px",
                height: "400px",
                textAlign: "center",
                margin: "60px auto",
              }}
            >
              <Col>
                <Row style={{ margin: "66px 0 30px" }}>
                  <Col>
                    <h1>결제 성공 하였습니다.</h1>
                  </Col>
                </Row>
                <Row style={{ fontSize: "20px" }}>
                  <div>{`주문 아이디: ${searchParams.get("orderId")}`}</div>
                </Row>
                <Row style={{ fontSize: "20px", margin: "35px 0 30px" }}>
                  <div>{`결제 금액: ${Number(
                    searchParams.get("amount")
                  ).toLocaleString()}원`}</div>
                </Row>
                <Row style={{ marginTop: "50px" }}>
                  <Col>
                    <input
                      className="btn btn-secondary"
                      style={{ width: "80%", margin: "0 auto" }}
                      type="button"
                      value={"홈으로"}
                      onClick={() => {
                        navigate("/");
                      }}
                    />
                  </Col>
                  <Col>
                    <input
                      className="btn btn-gaya-gradiant"
                      style={{ width: "80%", margin: "0 auto" }}
                      type="button"
                      value={"마이페이지"}
                      onClick={() => {
                        navigate("/mypage");
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}
