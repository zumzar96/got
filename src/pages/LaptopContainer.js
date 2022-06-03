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

const LaptopsContainer = (props) => {
  return (
    <Stack direction="horizontal" gap={0}>
      <div className="bg-light border">
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src={props.imagee} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Stack>
  );
};

export default LaptopsContainer;
