import React from "react";
import { Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux/es/exports";
import MydModalWithGrid from "./Modal";
import { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/modalSlice.js";
import { useEffect } from "react";

const CartButton = () => {
  const dispatch = useDispatch();
  const mdl = useSelector((state) => state.modal.modalState);
  const items = useSelector((state) => state.cart.items);
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const toggleModalhandler = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <Fragment>
      <Button variant="primary" onClick={toggleModalhandler}>
        Cart <Badge bg="secondary">{numberOfCartItems}</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>
      <MydModalWithGrid show={mdl} onHide={toggleModalhandler} />
    </Fragment>
  );
};
export default CartButton;
