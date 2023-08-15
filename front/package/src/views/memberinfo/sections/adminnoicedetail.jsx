import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row, Col, Table, Modal, Input, Label } from 'reactstrap';




const Modaldetail = ({ detail, setdetail, modaltogle, setmodalopp, setrender }) => {

    const [moddetail, setmoddetail] = useState(true); //관리자가 공지글을 수정할시 disavled를 풀어주기위한 togle형식의 usestate 버튼활성화도 시킴.

    const handleInputChange = useCallback((event) => {//관리자가 공지의 내용을 바꿀때 그내용의 값을 바로바로 인식하여 state에저장하기위한 changefunction
        setdetail((prevDetail) => ({
            ...prevDetail,
            [event.target.name]: event.target.value
        }));
    }, []);//이벤트가발생하는곳의 이름을 가져와서 usetate의 키로 설정 value를 값으로설정하여 그전에값과비교하여 달라지면 값을 삽입함.

    const putnotice = () => {//수정버튼을 누를시 활성화 됌.
        fetch(
            process.env.REACT_APP_SERVER_LOCAL + "/admin/modnotice", {
            method: "PUT",//전송 mapper를 설정
            headers: { "Content-Type": "application/json" },//값을 json형식으로 보내므로 headers에 전송값을 설정해줌
            body: JSON.stringify(detail),//보디에는 json형식으로 문자형으로 변경하여 위에서 저장한 값을 뿌려줌
        })
            .then((response) => {
                if (response.ok) {
                    alert("수정에 성공했습니다.");
                    setrender(); //수정한값을 리스트에 적용하기위해서 리액트를 리랜더링하기위해서 호출해줌. 호출의 값을 상위컴포넌트에있음.
                    setmodalopp(false);//수정완료시 수정버튼의 비활성화와  disavled기능을 활성화해줌
                }
            }).catch((err) => {
                alert(err);
            })
    }

    const deletenotice = () => {//삭제버튼을 누를시 발생
        fetch(
            process.env.REACT_APP_SERVER_LOCAL + "/admin/" + detail.n_num, {//delete의경우 query string으로 값을 전송가능하기떄문에 형식을 맞춰줌
            method: "delete",//전송 mapper를 설정
            headers: { "Content-Type": "application/json" },//값을 json형식으로 보내므로 headers에 전송값을 설정해줌
        })
            .then((response) => {
                if (response.ok) {
                    alert("정상적으로 글을 삭제했습니다..");
                    setrender();//삭제한값을 리스트에 적용하기위해서 리액트를 리랜더링하기위해서 호출해줌. 호출의 값을 상위컴포넌트에있음.
                    setmodalopp(false);//삭제완료시 수정버튼의 비활성화와  disavled기능을 활성화해줌
                }
            }).catch((err) => {
                alert(err);
            })
    }

    if (detail !== undefined) {
        return (
            <div style={{padding:"15px"}}>
                <Container>
                    <Row>
                        제목 <input value={detail.n_title} name={"n_title"} disabled={moddetail} onChange={handleInputChange} />
                    </Row>
                    <Row style={{marginTop:"20px"}}>
                        내용 <input style={{height:'100px'}} value={detail.n_content} name={"n_content"} disabled={moddetail} onChange={handleInputChange} />
                    </Row>
                     {/* oclick을 누를시 바로 함수 실행시켜서 modal의 disabled을 값을 변경 */}
                    {/* 상위 컴포넌트의 토글의값을 변경시켜서 모달창이 닫히도록 만듬 */}
                    <Row style={{marginTop:"20px"}}>
                        <Col>
                            {!moddetail && <input className='btn btn-secondary'  type='button' value={"수정하기"} onClick={putnotice} />}
                        </Col>
                        <Col>
                            {moddetail && <input className='btn btn-secondary'  type='button' value={"수정"} onClick={() => { setmoddetail(false) }} />}
                        </Col>
                        <Col>
                            {moddetail && <input className='btn btn-secondary' type='button' value={"삭제"} onClick={deletenotice} />}
                        </Col>
                        <Col>
                             <input className='btn btn-secondary'  type='button' value={"닫기"} onClick={modaltogle} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Modaldetail;