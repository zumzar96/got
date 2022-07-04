import React from "react";
import { Modal, Button } from "react-bootstrap";
import CartProducts from "../pages/CartProducts";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { cartActions } from "../store/cartSlice.js";

function MydModalWithGrid(props) {
  const totalAmnt = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <CartProducts />
      </Modal.Body>
      <Modal.Footer>
        Total amount : {totalAmnt}
        <Button onClick={clearCartHandler}>Clear cart</Button>
        <Button onClick={props.onHide}>Order</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid;
