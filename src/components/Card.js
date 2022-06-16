import React from "react";
import {
  Card,
  Stack,
} from "react-bootstrap";

const Crd = (props) => {
  return (
    <Stack direction="horizontal">
      <div className="bg-light border">
        <Card style={props.style}>
          <Card.Img variant="top" src={props.src}/>
          <Card.Body >
            <Card.Title>{props.id}</Card.Title>
            <Card.Text>
              {props.price}
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