/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card } from 'reactstrap';

import img1 from '../../../assets/images/blog/blog-home/img3.jpg';
import img2 from '../../../assets/images/blog/blog-home/img2.jpg';
import img3 from '../../../assets/images/blog/blog-home/img1.jpg';

const BlogComponent = () => {
    return (
        <div>
            <div className="blog-home2 spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8" className="text-center">
                            <h2 className="title">GaYa Hotel Event</h2>
                            <h6 className="subtitle">Event에 참여하시고 최고의 호텔을 경험하세요</h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40 justify-content-center">
                        <Col lg="4" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img1} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">12월<span>23</span></div>
                                <h5 className="font-medium m-t-30"><a href="#" className="link">신한카드 이벤트 20% 할인쿠폰발급</a></h5>
                                <p className="m-t-20">신한카드를 사용하시는 고객분들에게 20% 할인쿠폰을 발급합니다.</p>
                                <a href="#" className="linking text-themecolor m-t-10">상세보기<i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        <Col lg="4" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img2} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">2월<span>2</span></div>
                                <h5 className="font-medium m-t-30"><a href="#" className="link">수영장 오픈기념</a></h5>
                                <p className="m-t-20">호텔예약시 무료로 수영장 이용하세요</p>
                                <a href="#" className="linking text-themecolor m-t-10">상세보기<i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                        <Col lg="4" md="6">
                            <Card>
                                <a href="#"><img className="card-img-top" src={img3} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">11월<span>1</span></div>
                                <h5 className="font-medium m-t-30"><a href="#" className="link">호텔 스카이다이빙 Event</a></h5>
                                <p className="m-t-20">한정된 기간에만 사용하실수있는 스카이다이빙을 응모하여 이용해보세요</p>
                                <a href="#" className="linking text-themecolor m-t-10">상세보기<i className="ti-arrow-right"></i></a>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BlogComponent;
