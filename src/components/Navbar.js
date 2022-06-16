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
  const [searchProd, setSearch] = useState('') 
  const Onclickhandler = () => {
    navigate("/searchproduct", { state: { searchedProd: searchProd } });
  };


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
            <Offcan onClick={props.onClick}></Offcan>
            
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(event) => setSearch(event.target.value)}
              />
              <Button variant="primary" onClick={Onclickhandler}>Search</Button>
            </Form>
          </Nav>
            <NavDropdown title="profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="">profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logOutHandler}>Logout</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavB;
