import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, NavItem } from "reactstrap";

const RoomNavi = ({ scrollRef }) => {
  // 리뷰 리스트 출력시 필요한 정보 객체
  const [navIndex, setNavIndex] = useState(null);
  const navRef = useRef([]);

  useEffect(() => {
    // { behavior: 'smooth' } 속성을 주면 스크롤이 스르륵~ 올라가거나 내려가면서 이동하고, 없으면 아무 애니메이션 없이 바로 목적지를 보여준다.
    scrollRef.current[navIndex]?.scrollIntoView({ behavior: "smooth" });
    setNavIndex(null);
  }, [scrollRef, navIndex]);

  // useEffect(() => {
  //   const changeNavBtnStyle = () => {
  //     scrollRef.current.forEach((ref, idx) => {
  //       if (ref.offsetTop !== null) {
  //         if (ref.offsetTop - 180 < window.scrollY) {
  //           navRef.current.forEach((ref) => {
  //             ref.className = ref.className.replace(" active", "");
  //           });

  //           navRef.current[idx].className += " active";
  //         }
  //       }
  //     });
  //   };
  //   window.addEventListener("scroll", changeNavBtnStyle);

  //   return () => {
  //     window.removeEventListener("scroll", changeNavBtnStyle);
  //   };
  // }, [scrollRef]);

  //방 상세정보 속 네비게이션
  const DETAIL_NAV = [
    { idx: 0, name: "방 소개" },
    { idx: 1, name: "옵션 소개" },
    { idx: 2, name: "리뷰" },
  ];

  const Row2Styles = {
    height: "80px",
    fontSize: "25px",
    textAlign: "center",
    paddingTop: "18px",
  };

  // CSS 나중에
  return (
    <Container
      id="navContainer"
      style={{
        margin: "20px auto",
        border: "solid 1px #c2a575",
        fontFamily: "Orbit",
      }}
    >
      {/* 스크롤 내리면 화면 맨 위에 고정되게 */}
      <Row>
        <Col md="2"></Col>
        {DETAIL_NAV.map(({ idx, name }) => (
          <Col
            key={idx}
            ref={(ref) => (navRef.current[idx] = ref)}
            onClick={() => {
              setNavIndex(idx);
            }}
            style={Row2Styles}
          >
            {name}
          </Col>
        ))}
        <Col md="2"></Col>
      </Row>
    </Container>
  );
};

export default RoomNavi;
