import React from "react";
import { Form, Button } from 'react-bootstrap';
import { useMutation } from "react-query";
import { signup } from "../services/user";
import { useRef } from "react";
import { Container } from "react-bootstrap";


const Register = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const mutation = useMutation((info) => signup(info))

  return (
    <Container>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailInputRef}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordInputRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button
             onClick={() => {
               mutation.mutate({ email: emailInputRef.current.value, password: passwordInputRef.current.value })
             }}
           >
             Signup
           </Button>
    </Form>
    </Container>
  );
};

export default Register;
