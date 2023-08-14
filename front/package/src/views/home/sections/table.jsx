import React, { useEffect, useState } from 'react';
import { Col, Container, Modal, Row, Table } from 'reactstrap';


const PageTable = () => {
    const [notice, setnotice] = useState([]);//전체 공지사항 리스트를저장하는 usestate
    const [modalop, setmodalopp] = useState(false);//모달창을 띄우는 버튼
    const [detail, setdetail] = useState([]);// 공지사항의 상세 정보를 저장하는 usesteta

    useEffect(() => {//처음실행할떄 전체 공지사항의 정보를가져옴
        fetchData();
    }, [])

    async function fetchData() {//전체 공지사항 리스트를가져오는 fethch 
        fetch(process.env.REACT_APP_SERVER_LOCAL + "/admin/notice")
            .then((response) => {
                return response.json();//json형식으로 파싱시킴
            }).then((data) => {
                setnotice(data);//가져온정보를 state에저장
            }).catch((err) => {
                console.log(err);
            })
    }

    const Readnotice = (event) => {
        fetch(process.env.REACT_APP_SERVER_LOCAL + "/admin/ndetail?n_num=" + event.target.id)//상세보기 버튼 클릭시 저장된 글번호를 토대로 서버에 정보를요청 GET방식
            .then((response) => {
                return response.json();//파싱
            }).then((data) => {
                setdetail(data);//저장
            }).catch((err) => {
                console.log(err);
            })
        setmodalopp(true);//모달활성화
    }
    const Notice = () => {
        if (notice !== undefined) {//notice 에저장된리스트가있으면 실행 없으면 실행하지않음
            return notice.map((notice) => (
                <tr key={notice.n_num}>
                    <td>
                        {notice.n_num}
                    </td>
                    <td>
                        <input style={{ border: "none", backgroundColor: "white" }} type='button' value={notice.n_title} id={notice.n_num} onClick={Readnotice} />
                        {/* 버튼타입으로만들어 onclick을 사용할수있도록 제목을 만듬 스타일을 넣어주어 테투리와색을 없애줌 id에 글의 번호를 담아둠  */}
                    </td>
                    <th><span className="label label-danger">admin</span></th>
                    {/* 작성자를 알려주는 뱃지 */}
                </tr>
            ));
        } else {
            //notice에 저장된 글이없으면실행 
            return (
                <tr>
                    <td colSpan={3}>
                        작성된 공지가 없습니다.
                    </td>
                </tr>
            );
        }
    }
    const Details = () => {
        //저장되어있는 detail를 출력해주는부분 값이없으면 실행하지않음 있으면 실행함 
        if (detail !== undefined) {
            return (
                <>
                    <input value={detail.n_title} name={"n_title"} disabled />
                    <input value={detail.n_content} name={"n_content"} disabled />
                    <input type='button' value={"닫기"} onClick={() => { setmodalopp(false) }} />
                </>
            )
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
                                        <Details />
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




