import React, { Fragment } from "react";
import { Form, Button, Alert, Col, Row} from "react-bootstrap";
import { useMutation } from "react-query";
import { login } from "../services/user";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavB from "../components/Navbar"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().min(8).max(32).required(),
}).required();



const Login = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const mutation = useMutation((info) => login(info));


  const onSubmitHandler = () => {
    mutation.mutate({
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    });
    }
  


  return (
    <Fragment>
      <div><NavB></NavB></div>
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <Form onSubmit={onSubmitHandler}>
          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              {...register("email")} placeholder="email" type="email" required
              ref={emailInputRef}
            />
            <Form.Text className="text-muted">
            {errors.email?.message}
            </Form.Text>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              {...register("password")}
              placeholder="password"
              type="password"
              required
              ref={passwordInputRef}
            />
            <Form.Text className="text-muted">
            {errors.password?.message}
            </Form.Text>
          </Form.Group>
          </Col>
          </Row>
          <Button
            type='submit'
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
