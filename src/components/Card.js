import React from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  Stack,
} from "react-bootstrap";

const Crd = (props) => {
  return (
    <Stack direction="horizontal">
      <div className="bg-light border">
        <Card style={props.style}>
          <Card.Img variant="top" src={props.src}/>
          <Card.Body >
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              {props.id}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link onClick={props.onClick}>View</Card.Link>
            <Card.Link >Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Stack>
  );
};

export default Crd;