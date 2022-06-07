import React from "react";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Offcanvas,
  Button,
  Nav,
  NavLink,
} from "react-bootstrap";

const Offcan = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow}>Products</Nav.Link>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Products
          <Nav.Link href="laptops">Laptops</Nav.Link>
          <Nav.Link href="tablets">Tablets</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Offcan;
