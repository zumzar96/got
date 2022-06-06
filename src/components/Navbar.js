import React, { useState } from "react";
import { useSelector } from "react-redux";
import { store } from "../store";
import { userActions } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import Offcan from "./Offcanvas";

const NavB = (props) => {
  const Loggedin = useSelector((state) => state.user.isLogedin);
  const navigate = useNavigate();

  const logOutHandler = () => {
    store.dispatch(userActions.logout());
    navigate("login");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="homepage">Home</Nav.Link>
            {Loggedin ? (
              <Nav.Link onClick={logOutHandler}>Logout</Nav.Link>
            ) : null}

            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="laptops">Laptops</NavDropdown.Item>
              <NavDropdown.Item href="books">Tablets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="products">Products</NavDropdown.Item>
            </NavDropdown>
            <Offcan onClick={props.onClick}></Offcan>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavB;
