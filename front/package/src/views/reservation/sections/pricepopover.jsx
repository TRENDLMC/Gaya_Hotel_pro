import React, { useState } from "react";
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Row,
  Col,
  Container,
} from "reactstrap";

const PopoverItem = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <span>
      <Button
        color="secondary"
        id={"Popover-" + props.id}
        type="button"
        style={{ width: "100px", padding: "5px", margin: "0" }}
      >
        {props.item.text}
      </Button>
      <Popover
        placement={props.item.placement}
        isOpen={popoverOpen}
        target={"Popover-" + props.id}
        toggle={toggle.bind(null)}
        style={{ width: "250px" }}
      >
        <PopoverHeader style={{ textAlign: "center" }}>
          추가 옵션 요금 안내
        </PopoverHeader>
        <PopoverBody>
          <Container style={{ textAlign: "center" }}>
            <Row>
              <Col>수영장</Col>
              <Col>20000원</Col>
            </Row>
            <Row>
              <Col>바베큐</Col>
              <Col>40000원</Col>
            </Row>
            <Row>
              <Col>조식</Col>
              <Col>30000원</Col>
            </Row>
            <Row>
              <Col>사우나</Col>
              <Col>20000원</Col>
            </Row>
            <Row>
              <Col>추가침대</Col>
              <Col>40000원</Col>
            </Row>
            <Row>
              <Col>VR룸</Col>
              <Col>100000원</Col>
            </Row>
            <Row>
              <Col>바베큐</Col>
              <Col>40000원</Col>
            </Row>
            <Row>
              <Col>키즈카페</Col>
              <Col>40000원</Col>
            </Row>
            <Row>
              <Col>기념행사</Col>
              <Col>300000원</Col>
            </Row>
          </Container>
        </PopoverBody>
      </Popover>
    </span>
  );
};

const TooltipPopover = () => {
  const popovers = [
    {
      placement: "top",
      text: "요금 안내",
    },
  ];

  return (
    <Col className="text-center">
      <div className="button-box">
        {popovers.map((popover, i) => {
          return <PopoverItem key={i} item={popover} id={i} />;
        })}
      </div>
    </Col>
  );
};

export default TooltipPopover;
