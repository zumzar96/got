import React, { useState, useEffect, useCallback, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Accordion, Button, Alert, Nav } from "react-bootstrap";
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
    <Button onClick={logOutHandler}>Logout</Button>
    </Fragment>
    
  );
}

export default Homepage;
