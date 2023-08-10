import React, { useState, forwardRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

// const RoomReviewList = () => {
//   // 세션 스토리지 roomInfo

const SERVER_URL = "http://localhost:8095/";

// const RoomReviewList = forwardRef((props, ref) => {
//   const [reviewList, setReviewList] = useState([]);

//   useEffect(() => {
//     searchReview();
//     console.log(reviewList);
//   });

//   const Row3Styles = {
//     border: "solid",
//   };
//   const roomInfo = sessionStorage.getItem("roomInfo");
//   // 리뷰 리스트 출력시 필요한 정보 객체

//   const searchReview = () => {
//     fetch(SERVER_URL + "/reserv/review", {
//       //fetch로 연결된 서버로 전송함
//       method: "POST", //전송 mapper를 설정
//       headers: { "Content-Type": "application/json" }, //값을 json형식으로 보내므로 headers에 전송값을 설정해줌
//       body: JSON.stringify(reviewList), //보디에는 json형식으로 문자형으로 변경하여 위에서 저장한 값을 뿌려줌
//     })
//       .then((response) => {
//         //성공시 서버에서 반환한 값을 json형태로변환
//         // JSON 데이터를 파싱하고 반환된 Promise를 반환합니다.
//         return response.json();
//       })
//       .then((data) => {
//         // 이제 data 변수에 JSON 데이터가 저장되어 있습니다.
//         setReviewList(data); // json데이터를 usestate에 통채로저장시킴
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   const reviewListView = reviewList.map(
//     (
//       review //map방식을 사용하여 존재하는 값만큼 반복함 roomlist에저장된값만큼 for을 사용한다고 보면됌.
//     ) => (
//       <Row>
//         <Col md="2">{review.starpoint}</Col>
//         <Col md="7">{review.content}</Col>
//         <Col md="3">{review.review_num}</Col>
//         {/* 작성자 아이디가 들어가야 하나 테스트 용으로 review_num으로 대체 */}
//       </Row>
//     )
//   );

//   return (
//     <section ref={(reviewRef) => (ref.current[2] = reviewRef)}>
//       <Container>
//         {/* 맨위로 올라갈수 있는 버튼이 항상 존재하게 */}
//         <Row>
//           <Col md="2">별점</Col>
//           <Col md="7">내용</Col>
//           <Col md="3">작성자</Col>
//         </Row>
//         <Row>
//           <Col className="col-md" style={Row3Styles}>
//             {reviewListView}
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// });

// export default RoomReviewList;

const ReviewList = () => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    //string으로 저장된 roomlist에서의 정보를 다시 JSON 형태로 되돌림
    const roomInfo = JSON.parse(sessionStorage.getItem("roominfo"));
    // console.log(roomInfo.r_num);
    searchReview(roomInfo.r_num);
    console.log(reviewList);
  }, []);

  const Row3Styles = {
    border: "solid",
  };

  const reviewListView = () => {
    if (reviewList !== undefined) {
      return reviewList.map(
        (
          review //map방식을 사용하여 존재하는 값만큼 반복함 roomlist에저장된값만큼 for을 사용한다고 보면됌.
        ) => (
          <Row style={Row3Styles}>
            <Col md="2">{review.starpoint}</Col>
            <Col md="7">{review.content}</Col>
            <Col md="3">{review.review_num}</Col>
            {/* 작성자 아이디가 들어가야 하나 테스트 용으로 review_num으로 대체 */}
          </Row>
        )
      );
    }
  };

  const searchReview = (r_num) => {
    const rrum = { r_num };
    fetch(SERVER_URL + "reserv/review", {
      //fetch로 연결된 서버로 전송함
      method: "POST", //전송 mapper를 설정
      headers: { "Content-Type": "application/json" }, //값을 json형식으로 보내므로 headers에 전송값을 설정해줌
      body: JSON.stringify(rrum), //보디에는 json형식으로 문자형으로 변경하여 위에서 저장한 값을 뿌려줌
    })
      .then((response) => {
        //성공시 서버에서 반환한 값을 json형태로변환
        // JSON 데이터를 파싱하고 반환된 Promise를 반환합니다.
        return response.json();
      })
      .then((data) => {
        // 이제 data 변수에 JSON 데이터가 저장되어 있습니다.
        console.log(data);
        setReviewList(data); // json데이터를 usestate에 통채로저장시킴
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Container>
      {/* 맨위로 올라갈수 있는 버튼이 항상 존재하게 */}
      <Row style={Row3Styles}>
        <Col md="2">별점</Col>
        <Col md="7">내용</Col>
        <Col md="3">작성자</Col>
      </Row>

      {reviewListView}
    </Container>
  );
};

export default ReviewList;
