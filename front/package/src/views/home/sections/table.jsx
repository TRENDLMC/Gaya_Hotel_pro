import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Row, Table } from "reactstrap";

const PageTable = () => {
  const [notice, setnotice] = useState([]); //전체 공지사항 리스트를저장하는 usestate
  const [modalop, setmodalopp] = useState(false); //모달창을 띄우는 버튼
  const [detail, setdetail] = useState([]); // 공지사항의 상세 정보를 저장하는 usesteta

  useEffect(() => {
    //처음실행할떄 전체 공지사항의 정보를가져옴
    fetchData();
  }, []);

  async function fetchData() {
    //전체 공지사항 리스트를가져오는 fethch
    fetch(process.env.REACT_APP_SERVER_LOCAL + "/admin/notice")
      .then((response) => {
        return response.json(); //json형식으로 파싱시킴
      })
      .then((data) => {
        setnotice(data); //가져온정보를 state에저장
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const Readnotice = (event) => {
    fetch(
      process.env.REACT_APP_SERVER_LOCAL +
        "/admin/ndetail?n_num=" +
        event.target.id
    ) //상세보기 버튼 클릭시 저장된 글번호를 토대로 서버에 정보를요청 GET방식
      .then((response) => {
        return response.json(); //파싱
      })
      .then((data) => {
        setdetail(data); //저장
      })
      .catch((err) => {
        console.log(err);
      });
    setmodalopp(true); //모달활성화
  };
  const Notice = () => {
    if (notice !== undefined) {
      //notice 에저장된리스트가있으면 실행 없으면 실행하지않음
      return notice.map((notice) => (
        <tr key={notice.n_num}>
          <td>{notice.n_num}</td>
          <td>
            <input
              style={{ border: "none", backgroundColor: "white" }}
              type="button"
              value={notice.n_title}
              id={notice.n_num}
              onClick={Readnotice}
            />
            {/* 버튼타입으로만들어 onclick을 사용할수있도록 제목을 만듬 스타일을 넣어주어 테투리와색을 없애줌 id에 글의 번호를 담아둠  */}
          </td>
          <th>
            <span className="label label-danger">관리자</span>
          </th>
          {/* 작성자를 알려주는 뱃지 */}
        </tr>
      ));
    } else {
      //notice에 저장된 글이없으면실행
      return (
        <tr>
          <td colSpan={3}>작성된 공지가 없습니다.</td>
        </tr>
      );
    }
  };
  const Details = () => {
    //저장되어있는 detail를 출력해주는부분 값이없으면 실행하지않음 있으면 실행함
    if (detail !== undefined) {
      return (
        <div style={{ padding: "20px" }}>
          <Row>
            <Col
              style={{
                textAlign: "center",
                fontSize: "30px",
                fontFamily: "Orbit",
                marginBottom: "10px",
              }}
            >
              공지 사항
            </Col>
          </Row>
          <hr style={{ color: "#8f103d" }} />
          <Row style={{ marginBottom: "10px", fontSize: "20px" }}>
            <Col md="1"></Col>
            <Col md="2" style={{ textAlign: "center" }}>
              제 목
            </Col>
            <Col md="1">:</Col>
            <Col>{detail.n_title}</Col>
          </Row>
          <hr style={{ color: "#8f103d" }} />
          <Row
            style={{
              width: "98%",
              margin: "0 auto",
              height: "200px",
              padding: "10px",
            }}
          >
            <Col>{detail.n_content}</Col>
          </Row>
          <hr style={{ color: "#8f103d" }} />
          <Row>
            <Col>
              <input
                type="button"
                className="btn btn-secondary"
                value={"닫기"}
                onClick={() => {
                  setmodalopp(false);
                }}
                style={{ width: "100%", marginTop: "15px" }}
              />
            </Col>
          </Row>
        </div>
      );
    }
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      left: "0",
      margin: "auto",
      width: "500px",
      height: "450px",
      padding: "0",
      overflow: "auto",
    },
  };
  return (
    <div style={{ margin: "0 auto" }}>
      <div className="spacer" id="table-component">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">공지사항</h1>
              <h6 className="subtitle">
                GaYa Hotel의 이용안내와 자주묻는 질문들을 확인하세요.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <Container style={{ marginLeft: "150px" }}>
        <Row>
          <Col></Col>
          <Col md="9">
            <div className="table-responsive">
              <Table style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                  </tr>
                </thead>
                <tbody>
                  <Notice />
                  <Modal
                    isOpen={modalop}
                    style={customStyles}
                    ariaHideApp={false}
                  >
                    <Details />
                  </Modal>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageTable;
