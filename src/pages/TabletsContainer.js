import React from "react";
import Crd from "../components/Card.js";
import Product from "./Product.js";
import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";

const TabletsContainer = (props) => {
  const navigate = useNavigate();
  const Onclickhandler = () => {
    navigate("/product", { state: { id: props.id } });
  };

  return <Crd style={{width:'13rem'}} src={props.imagee} id={props.id} onClick={Onclickhandler} />;
};

export default TabletsContainer;
