import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useMutation } from "react-query";

import { orderCart } from "../services/cart";

const OrderFrm = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const items = useSelector((state) => state.cart.items);
  const mutation = useMutation((info) => orderCart(info));

  const orderHandler = (e) => {
    e.preventDefault();
    mutation.mutate({
      name: name,
      lastName: lastName,
      adress: adress,
      items,
    });
  };

  return (
    <Container>
      <Form.Group
        className="mb-3"
        onChange={(event) => setName(event.target.value)}
      >
        <Form.Control placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Last name"
          onChange={(event) => setLastName(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          placeholder="Adress"
          onChange={(event) => setAdress(event.target.value)}
        />
      </Form.Group>
      <Button onClick={orderHandler}>Order</Button>
    </Container>
  );
};

export default OrderFrm;
