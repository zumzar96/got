import React from "react";
import Crd from "./Card.js";
import Product from "../pages/Product.js";
import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";

const ProductsContainer = (props) => {
  const navigate = useNavigate();
  const Onclickhandler = () => {
    navigate("/product", { state: { id: props.id } });
  };

  return <Crd style={{width:'13rem'}} src={props.imagee} id={props.id} onClick={Onclickhandler} />;
};

export default ProductsContainer;