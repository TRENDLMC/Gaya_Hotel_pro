import React, { useState } from "react";
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Container,
  Row,
  Col,
} from "reactstrap";

const PopoverItem = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <span>
      <Button
        className="mr-1"
        color="secondary"
        id={"Popover-" + props.id}
        type="button"
        style={{ width: "100px", padding: "5px" }}
      >
        {props.item.text}
      </Button>
      <Popover
        placement={props.item.placement}
        isOpen={popoverOpen}
        target={"Popover-" + props.id}
        toggle={toggle.bind(null)}
      >
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>수영장 : 20000원</PopoverBody>
      </Popover>
    </span>
  );
};

const TooltipPopover = () => {
  const popovers = [
    {
      placement: "top",
      text: "가격 안내",
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <div className="button-box">
              {popovers.map((popover, i) => {
                return <PopoverItem key={i} item={popover} id={i} />;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TooltipPopover;
