import React from "react";
import { Form, Card, Stack } from "react-bootstrap";
import { useSelector } from "react-redux/es/exports";

const Crd = (props) => {
  const mdl = useSelector((state) => state.modal.modalState);

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
            <Card.Link onClick={props.onClic}>Add</Card.Link>
            {mdl ? (
            <Card.Link onClick={props.onClik}>Remove</Card.Link>
          ) : null}
          </Card.Body>
        </Card>
      </div>
    </Stack>
  );
};

export default Crd;
