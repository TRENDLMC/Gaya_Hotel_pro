import React, { useEffect, useState } from "react";
import { Col, Container, Row, Modal } from "reactstrap";
import Adminprice from "./adminprice";

const Adminres = () => {
  const [totReservation, setReservation] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const [modelon2, setmodalon2] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
  });

  const btn_togle2 = (event) => {
    setmodalon2({ [event.target.id]: true });
  };

  async function fetchData() {
    try {
      const response = await fetch(process.env.REACT_APP_SERVER_LOCAL + "/admin/reservation");
      const data = await response.json();
      setReservation(data);
    } catch (error) {
      console.error("Error fetching reservation data:", error);
    }
  }

  const renderOptionColumns = (options) => {
    return Object.keys(options)
      .filter((key) => key.startsWith("imt"))
      .map((optionKey) => (
        <Col md="6" key={optionKey}>{options[optionKey].option_content}</Col>
      ));
  };
  const customStyles2 = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "300px",
      padding: "0",
      overflow: "auto",
    },
  };

  const RenderReservationRows = () => {
    if (totReservation.length > 0) {
      return totReservation.map((Res, index) => (
        <Row key={index} style={{ textAlign: "center", height: "70px", marginTop:"15px" }}>
          <hr style={{margin:"0 auto", width:"97%", marginBottom:"7px"}}/>
          <Col style={{lineHeight:"70px"}} >{Res.res_num.reservation_num}</Col>
          <Col md="3" style={{display:"table"}}>
            <div style={{display: "table-cell",verticalAlign: "middle"}}>
              {Res.res_num.id.id}
              <br />
              {Res.res_num.order_id}
            </div>
          </Col>
          <Col md="2" style={{display:"table"}}>
            <div style={{display: "table-cell",verticalAlign: "middle"}}>
              {Res.res_num.r_num.r_num}
              <br />
              {Res.res_num.r_num.r_type}
            </div>
          </Col>
          <Col style={{display:"table"}}>
            <div style={{display: "table-cell",verticalAlign: "middle"}}>
              {new Date(Res.res_num.check_in).toLocaleDateString()}
              <br />~ {new Date(Res.res_num.check_out).toLocaleDateString()}
            </div>
          </Col>
          <Col style={{display:"table", lineHeight:'70px'}}>
          <input
                type="button"
                className="btn btn-primary"
                id={index}
                onClick={btn_togle2}
                value={"선택 옵션 보기"}
                style={{
                  display: "table-cell",
                  verticalAlign: "middle",
                  height: "44",
                  fontSize:"13px",
                  padding:"10px"
                }}
              ></input>
          </Col>

          <Col style={{display:"table"}}>
            <div style={{display: "table-cell",verticalAlign: "middle"}}>
              {Res.res_num.total_price}
            </div>
          </Col>

          <Modal id={index} style={customStyles2} isOpen={modelon2[index]}>
                <Container>
                  <Row style={{ height: "30px", margin: "10px 0 20px 0"}}>
                    <Col
                      style={{
                        fontSize: "25px",
                        textAlign: "center",
                        fontFamily: "Orbit",
                      }}
                    >
                      선택된 옵션
                    </Col>
                  </Row>
                  <Row style={{ textAlign: "center" }}>
                    {(()=>{
                      if(Res.length === 1){
                        return <Col style={{margin:"15px"}}>선택된 옵션이 없습니다</Col>;
                      }else{
                        return Object.keys(Res)
                        .filter((key) => key.startsWith("imt"))
                        .map((optionKey) => (
                            <Col md="6" key={optionKey}>
                              <hr/>
                              {Res[optionKey].option_content}
                              <hr/>
                            </Col>
                        ));
                      }
                    })()}
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "center", margin: "0 0 15px 0" }}>
                      <input
                        type="button"
                        value={"닫기"}
                        onClick={btn_togle2}
                        className="btn btn-secondary"
                      />
                    </Col>
                  </Row>
                </Container>
              </Modal>
        </Row>
      ));
    } else {
      return (
        <Row>
          <Col></Col>
          <Col>예약된 내역이 없습니다.</Col>
          <Col></Col>
        </Row>
      );
    }
  };

  return (
    <>
      <Container style={{ marginBottom: "200px" }}>
        <Row>
          <Col style={{
            fontSize: "40px",
            fontFamily: "Orbit",
            margin: "30px 0 30px 20px",
            textAlign:"center"
          }}
        >예약내역</Col>
        </Row>
        <hr />
        <Row style={{ textAlign: "center", lineHeight: "40px" }}>
          <Col>예약번호</Col>
          {/* 아이디랑 order_idZ */}
          <Col md="3">예약정보</Col>
          <Col md="2">방 정보</Col>
          <Col>입퇴실날짜</Col>
          <Col>옵션</Col>
          <Col>총결제금액</Col>
        </Row>
        
        <RenderReservationRows />
        <hr />
        <Adminprice />
      </Container>

      

    </>
  );
};

export default Adminres;
