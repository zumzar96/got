import React from "react";
import { Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux/es/exports";

const CardButton = () => {
    const items = useSelector((state) => state.cart.items);
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);
  return (
    <Button variant="primary">
      Cart <Badge bg="secondary">{numberOfCartItems}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
};
export default CardButton;
