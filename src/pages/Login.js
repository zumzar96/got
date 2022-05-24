import React, { Fragment, useState } from "react";
import { Form, Button, Alert, Col, Row } from "react-bootstrap";
import { useMutation } from "react-query";
import { login } from "../services/user";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavB from "../components/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { userActions } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import './LoginWrapper.scss'
import AuthWrapper from "./LoginWrapper"

const Login = () => {
  const Loggedin = useSelector((state) => state.user.isLogedin);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const formSchema = Yup.object().shape({
    email: Yup.string(),
    password: Yup.string(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const mutation = useMutation((info) => login(info), {
    onSuccess: () => {
      if (!Loggedin) {
        navigate("/login");
      }
    },
  });

  const onSubmitHandler = () => {
    mutation.mutate({
      email: email,
      password: password,
    });
  };

  return (
    <Fragment>
      <div>
        <NavB></NavB>
      </div>
      <AuthWrapper className="authWrapper">
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
            <Button type="submit">Login</Button>
            <Alert key={"light"} variant={"light"}>
              {error}
            </Alert>
            <Alert key={"light"} variant={"light"}>
              If u dont have an account
            </Alert>
            <Button type="submit" onClick={() => navigate("/register")}>
              Sign up
            </Button>
          </Form>
        </Container>
      </AuthWrapper>
    </Fragment>
  );
};

export default Login;
