import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';

const PageTable = () => {
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
                                    <tr>
                                        <td>1</td>
                                        <td>환불안내</td>
                                        <td>22-01-08</td>
                                        <td><span className="label label-danger">admin</span> </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>찾아오시는길</td>
                                        <td>22-01-08</td>
                                        <td><span className="label label-info">member</span> </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>서비스이용 약관</td>
                                        <td>22-01-08</td>
                                        <td><span className="label label-warning">developer</span> </td>
                                    </tr>
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
