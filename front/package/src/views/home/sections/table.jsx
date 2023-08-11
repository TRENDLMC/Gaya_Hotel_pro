import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Modal, Input, Label } from 'reactstrap';


const PageTable = () => {

    const [notice, setnotice] = useState([]);
    const [modalop, setmodalopp] = useState(false);
    const [detail, setdetail] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        fetch("http://localhost:8095/admin/notice")
            .then((response) => {
                return response.json();
            }).then((data) => {
                setnotice(data);
            }).catch((err) => {
                console.log(err);
            })
    }

    const Readnotice = (event) => {
        fetch("http://localhost:8095/admin/ndetail?n_num=" + event.target.id)
            .then((response) => {
                return response.json();
            }).then((data) => {
                setdetail(data);
            }).catch((err) => {
                console.log(err);
            })
        setmodalopp(true);
    }
    const Notice = () => {
        if (notice !== undefined) {
            return notice.map((notice) => (
                <tr key={notice.n_num}>
                    <td>
                        {notice.n_num}
                    </td>
                    <td>
                        <input style={{ border: "none", backgroundColor: "white" }} type='button' value={notice.n_title} id={notice.n_num} onClick={Readnotice} />
                    </td>
                    <th><span className="label label-danger">admin</span></th>
                </tr>
            ));
        } else {
            return (
                <tr>
                    <td colSpan={3}>
                        작성된 공지가 없습니다.
                    </td>
                </tr>
            );
        }
    }

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
        <div>
            <div className="spacer" id="table-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">공지사항</h1>
                            <h6 className="subtitle">GaYa Hotel의 이용안내와 자주묻는 질문들을 확인하세요.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="table-responsive">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>작성일자</th>
                                        <th>작성자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Notice />
                                    <Modal isOpen={modalop} style={customStyles} ariaHideApp={false}>
                                        <input value={detail.n_title} name={"n_title"} disabled />
                                        <input value={detail.n_content} name={"n_content"} disabled />
                                        <input type='button' value={"닫기"} onClick={() => { setmodalopp(false) }} />
                                    </Modal>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageTable;




