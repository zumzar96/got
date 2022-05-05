import React, { Fragment } from "react";
import { Form, Button, Alert, Col, Row} from "react-bootstrap";
import { useMutation } from "react-query";
import { login } from "../services/user";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavB from "../components/Navbar"


const Login = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const mutation = useMutation((info) => login(info));

  return (
    <Fragment>
      <div><NavB></NavB></div>
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <Form>
          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailInputRef}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordInputRef}
            />
          </Form.Group>
          </Col>
          </Row>
          <Button
            onClick={() => {
              mutation.mutate({
                email: emailInputRef.current.value,
                password: passwordInputRef.current.value,
              });
            }}
          >
            Login
          </Button>
          <Alert key={"light"} variant={"light"}>
            If u dont have an account
          </Alert>
          <Button type="submit" onClick={() => navigate("/Register")}>
            Sign up
          </Button>
        </Form>
      </Container>
    </Container>
    </Fragment>
    
  );
};

export default Login;
