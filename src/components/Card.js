import React from "react";
import { Form, Card, Stack } from "react-bootstrap";

const Crd = (props) => {
  return (
    <Stack direction="horizontal">
      <div className="bg-light border">
        <Card style={props.style}>
          <Card.Img variant="top" src={props.src} />
          <Card.Body>
            <Card.Title>{props.id}</Card.Title>
            <Card.Text>{props.price}</Card.Text>
            <Card.Text>{props.amount}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link onClick={props.onClick}>View</Card.Link>
            <Card.Link onClick={props.onClic}>Add to Cart</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Stack>
  );
};

export default Crd;
