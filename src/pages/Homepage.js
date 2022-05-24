import React, { useState, useEffect, useCallback, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Accordion, Button, Alert, Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery } from "react-query";
import NavB from "../components/Navbar"
import { store } from '../store'
import { userActions } from '../store/userSlice';




function Homepage(props) {
  const navigate = useNavigate();

  const logOutHandler = () => {
    store.dispatch(userActions.logout())
    navigate("login")
  };

  return (<Fragment>
    <NavB/>
    

    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button onClick={logOutHandler} variant="primary">Logout</Button>
  </Card.Body>
</Card>
    
    </Fragment>
    
  );
}

export default Homepage;
