import React from "react";
import { Nav } from "react-bootstrap";

const NavB = () => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="books">books</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="houses">houses</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="login">login</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavB;
