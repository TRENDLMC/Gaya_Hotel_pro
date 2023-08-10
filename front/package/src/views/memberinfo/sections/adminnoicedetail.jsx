import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row, Col, Table, Modal, Input, Label } from 'reactstrap';




const Modaldetail = ({ detail, setdetail, modaltogle, setmodalopp, setrender }) => {

    const [moddetail, setmoddetail] = useState(true);
    const handleInputChange = useCallback((event) => {
        setdetail((prevDetail) => ({
            ...prevDetail,
            [event.target.name]: event.target.value
        }));
    }, []);

    const modifyaltogle = () => {
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

export default Modaldetail;