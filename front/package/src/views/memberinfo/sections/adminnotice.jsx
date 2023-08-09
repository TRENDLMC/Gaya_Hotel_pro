import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row, Col, Table, Modal, Input, Label } from 'reactstrap';





const Admintabel = () => {
    const [notice, setnotice] = useState([]);
    const [modalop, setmodalopp] = useState(false);
    const [detail, setdetail] = useState([]);
    const [addmodal, setaddmodal] = useState(false);
    const [addnotice, setaddnotice] = useState({
        n_content: "",
        n_title: ""
    })

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

    const changeaddnotice = (event) => {
        setaddnotice({ ...addnotice, [event.target.name]: event.target.value });
    }

    const addnoticefetch = () => {
        if (addnotice.n_title === "" || addnotice.n_content === "") {
            alert("제목과 내용은 필수입니다.")
            return;
        }
        fetch(
            "http://localhost:8095/admin/addnotice", {
            method: "POST",//전송 mapper를 설정
            headers: { "Content-Type": "application/json" },//값을 json형식으로 보내므로 headers에 전송값을 설정해줌
            body: JSON.stringify(addnotice),//보디에는 json형식으로 문자형으로 변경하여 위에서 저장한 값을 뿌려줌
        })
            .then((response) => {
                if (response.ok) {
                    alert("글작성에 성공했습니다.");
                    fetchData();
                    addmodaltogle();
                    setaddnotice({
                        n_content: "",
                        n_title: ""
                    })
                }
            }).catch((err) => {
                alert(err);
            })
    }

    const modaltogle = () => {
        setmodalopp(!modalop);
    }

    const addmodaltogle = () => {
        setaddmodal(!addmodal);
        setaddnotice({
            n_content: "",
            n_title: ""
        })
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
            <Container>
                <Row>
                    <Col style={{ marginLeft: "200px" }} md="10">
                        <div className="table-responsive">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>작성자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Notice />
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col><input type='button' value={"글작성"} onClick={addmodaltogle} /></Col>
                </Row>
            </Container>
            <Modal isOpen={modalop} style={customStyles} ariaHideApp={false}>
                <Modaldetail detail={detail} setdetail={setdetail} modaltogle={modaltogle} setmodalopp={setmodalopp} setrender={fetchData} />
            </Modal>
            <Modal isOpen={addmodal} style={customStyles} ariaHideApp={false}>

                <Label htmlFor="name">제목</Label>
                <Input type='text' name={"n_title"} onChange={changeaddnotice} />
                <Label htmlFor="name">내용</Label>
                <Input type='text' name={"n_content"} onChange={changeaddnotice} />
                <Input type='button' value={'작성'} onClick={addnoticefetch} />
                <Input type='button' value={'취소'} onClick={addmodaltogle} />

            </Modal>
        </div>
    );
}
export default Admintabel;
const Modaldetail = ({ detail, setdetail, modaltogle, setmodalopp, setrender }) => {

    const [moddetail, setmoddetail] = useState(true);
    const handleInputChange = useCallback((event) => {
        setdetail((prevDetail) => ({
            ...prevDetail,
            [event.target.name]: event.target.value
        }));
    }, []);

    const modifyaltogle = () => {
        console.log(detail);
        setmoddetail(!moddetail);
    }
    const putnotice = () => {
        fetch(
            "http://localhost:8095/admin/modnotice", {
            method: "PUT",//전송 mapper를 설정
            headers: { "Content-Type": "application/json" },//값을 json형식으로 보내므로 headers에 전송값을 설정해줌
            body: JSON.stringify(detail),//보디에는 json형식으로 문자형으로 변경하여 위에서 저장한 값을 뿌려줌
        })
            .then((response) => {
                if (response.ok) {
                    alert("수정에 성공했습니다.");
                    setrender();
                    setmodalopp(false);
                }
            }).catch((err) => {
                alert(err);
            })
    }

    const deletenotice = () => {
        fetch(
            "http://localhost:8095/admin/" + detail.n_num, {
            method: "delete",//전송 mapper를 설정
            headers: { "Content-Type": "application/json" },//값을 json형식으로 보내므로 headers에 전송값을 설정해줌
        })
            .then((response) => {
                if (response.ok) {
                    alert("정상적으로 글을 삭제했습니다..");
                    setrender();
                    setmodalopp(false);
                }
            }).catch((err) => {
                alert(err);
            })
    }

    if (detail !== undefined) {
        return (
            <>
                <input value={detail.n_title} name={"n_title"} disabled={moddetail} onChange={handleInputChange} />
                <input value={detail.n_content} name={"n_content"} disabled={moddetail} onChange={handleInputChange} />
                {moddetail && <input type='button' value={"삭제"} onClick={deletenotice} />}
                {moddetail && <input type='button' value={"수정"} onClick={modifyaltogle} />}
                {!moddetail && <input type='button' value={"수정하기"} onClick={putnotice} />}
                <input type='button' value={"닫기"} onClick={modaltogle} />
            </>
        )
    } else {
        return (
            <div></div>
        )
    }
}