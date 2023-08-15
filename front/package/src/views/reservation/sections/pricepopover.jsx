import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody, Col } from "reactstrap";

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
      >
        <PopoverHeader>추가 옵션 요금 안내</PopoverHeader>
        <PopoverBody>수영장 : 20000원</PopoverBody>
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
