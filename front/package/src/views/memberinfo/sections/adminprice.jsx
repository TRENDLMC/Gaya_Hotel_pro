import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";


const Adminprice = () => {
    const [totalprice, settotalprice] = useState("");

    useEffect(() => {
        async function fetchData() {
            fetch("http://localhost:8095/admin/gProfit")
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    settotalprice(data);
                }).catch((err) => {
                    console.log(err);
                })
        }
        fetchData();
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                </Col>
                <Col>
                    Gaya Hotel 총메출
                </Col>
                <Col>
                </Col>
                {totalprice}원
                <Col>
                </Col>
            </Row>
        </Container>

    );
}

export default Adminprice;