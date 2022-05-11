import React, { Fragment, useState } from "react";
import { Form, Button, Alert, Col, Row } from "react-bootstrap";
import { useMutation } from "react-query";
import { signup } from "../services/user";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavB from "../components/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const mutation = useMutation((info) => signup(info));

  const onSubmitHandler = () => {
    mutation.mutate({
      Email: emailInputRef.current.value,
      Password: passwordInputRef.current.value,
    });
  };

  const onSubmit = data => console.log(data);


  return (
    <Fragment>
      <div>
        <NavB></NavB>
      </div>
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <Form onSubmit={handleSubmit(onSubmitHandler)}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    {...register("email")}
                    placeholder="email"
                    type="email"
                    required
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
                    minLength={8}
                    maxLength={20}
                    ref={passwordInputRef}
                  />
                  <Form.Text className="text-muted">
                    {errors.password?.message}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit">Signup</Button>
          </Form>
        </Container>
      </Container>
    </Fragment>
  );
};

export default Register;
