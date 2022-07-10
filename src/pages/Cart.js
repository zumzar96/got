import React from "react";
import { Modal, Button } from "react-bootstrap";
import CartProducts from "../components/CartProducts";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { cartActions } from "../store/cartSlice.js";
import OrderFrm from "../components/OrderForm";
import { useState } from "react";

function MydModalWithGrid(props) {
  const totalAmnt = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const [orderForm, setOrderForm] = useState(false);
  const formOrderHandler = () => {
    setOrderForm(!orderForm);
  };
  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <CartProducts />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={clearCartHandler}>Clear cart</Button>
        {!orderForm ? (
          <Button onClick={formOrderHandler}>Continue</Button>
        ) : <Button onClick={formOrderHandler}>Close</Button>}
        
        Total amount : {totalAmnt}
        {orderForm ? <OrderFrm/> : null}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid;
