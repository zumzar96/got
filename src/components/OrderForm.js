import React from "react";
import { Form, Container } from "react-bootstrap";

const OrderFrm = (props) => {
  return (
    <Container>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Last name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Adress" />
      </Form.Group>
    </Container>
  );
};

export default OrderFrm;
