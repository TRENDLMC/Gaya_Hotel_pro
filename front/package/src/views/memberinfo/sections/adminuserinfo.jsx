import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";



const Adminuserinfo = () => {


    return (
        <Container>
            <Row>
                <Col>
                    유저아이디
                </Col>
                <Col>
                    이메일
                </Col>
                <Col>
                    이름
                </Col>
                <Col>
                    등급
                </Col>
                <Col>
                    변경값
                </Col>
                <Col>
                </Col>
            </Row>
            <User />
        </Container>
    )
}





const User = () => {

    const [userinfo, setuserinfo] = useState([]);
    const [gradere, setgradere] = useState("");
    const [togle, settogle] = useState("1");
    useEffect(() => {
        fetch("http://localhost:8095/admin/userinfo")
            .then((response) => {
                return response.json();
            }).then((data) => {
                setuserinfo(data);
            })
    }, [togle])
    const setgradesta = (event) => {
        setgradere(event.target.value);
    }

    const idsele = (event) => {
        var useinf = {
            id: event.target.id,
            grade: gradere,
        }
        fetch(
            "http://localhost:8095/admin/moduser", {
            method: "PUt",//전송 mapper를 설정
            headers: { "Content-Type": "application/json" },//값을 json형식으로 보내므로 headers에 전송값을 설정해줌
            body: JSON.stringify(useinf),//보디에는 json형식으로 문자형으로 변경하여 위에서 저장한 값을 뿌려줌
        })
            .then((response) => {
                if (response.ok) {
                    alert("등급변경되었습니다.");
                    settogle(togle + 1);
                }
            }).then((data) => {
                setuserinfo(data);
            })

    }


    if (userinfo !== undefined) {

        return (
            userinfo.map((user, idx) => (
                <Row key={user.id}>
                    <Col>
                        {user.id}
                        <input type="hidden" value={user.id} id={idx} />
                    </Col>
                    <Col>
                        {user.email}
                    </Col>
                    <Col>
                        {user.name}
                    </Col>
                    <Col>
                        {user.grade === 1 && "관리자"}
                        {user.grade === 0 && "유저"}
                        {user.grade === -1 && "블랙"}
                    </Col>
                    <Col>
                        <select onChange={setgradesta}>
                            <option >등급</option>
                            <option value={"-1"}>블랙</option>
                            <option value={"0"}>유저</option>
                            <option value={"1"}>관리자</option>
                        </select>
                    </Col>
                    <Col>
                        <input id={user.id} type="button" value={"등급변경"} onClick={idsele} />
                    </Col>
                </Row>
            )))
    }
}
export default Adminuserinfo;