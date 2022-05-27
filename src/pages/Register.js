import React, { Fragment, useState } from "react";
import { Form, Button, Alert, Col, Row } from "react-bootstrap";
import { useMutation } from "react-query";
import { signup } from "../services/user";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const mutation = useMutation((info) => signup(info), {
    onSuccess: () => navigate("/login"),
  });

  const onSubmitHandler = () => {
    mutation.mutate({
      email: email,
      password: password,
    });
  };

  return (
    <Fragment>   
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
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
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
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
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
