import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation } from "react-query";
import { login } from "../services/user";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const mutation = useMutation((info) => login(info));

  return (

    <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
       
      <Form>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordInputRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
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
        If u dont have an account
        <Button type="submit" onClick={() => navigate("/Register")}>
          Sign up
        </Button>
        <Button type="submit" onClick={() => navigate("/")}>home</Button>
      </Form>
      </Container>
    </Container>
    
  );
};

export default Login;
