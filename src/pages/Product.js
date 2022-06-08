import React from "react";
import Crd from "../components/Card.js";
import { useLocation } from "react-router-dom";

const Product = (props) => {
  const { state } = useLocation();
  const { id, src } = state; // Read values passed on state
  return (<div>{id}</div>);
};

export default Product;
