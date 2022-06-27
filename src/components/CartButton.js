import React from "react";
import { Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux/es/exports";
import MydModalWithGrid from "./Modal";
import { useState, Fragment } from "react";

const CartButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <Fragment>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Cart <Badge bg="secondary">{numberOfCartItems}</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>
      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};
export default CartButton;
