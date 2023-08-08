import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'reactstrap';


const Userinfo = () => {

    const [useinfomation, setuserinfomation] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8095/user/info", {
            method: "POST",//조회
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(moduserinfo),
        }).then((response) => {
            return response.json();
        }).then((date) => {
            setuserinfomation(date);
        }).catch((err) => {
            console.log(err);
        });

    }, [])

    const [moduserinfo, setmoduserinfo] = useState({
        id: sessionStorage.getItem("id"),
        add1: "",
        add2: "",
        email: "",
        name: "",
        p_num1: "",
        p_num2: "",
        p_num3: "",
        pwd: "",
    })



    return (
        <Container>

        </Container>
    );
}


export default Userinfo;