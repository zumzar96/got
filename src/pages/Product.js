import React from "react";
import Crd from "../components/Card.js";
import { useLocation } from "react-router-dom";



const Product = (props) => {
  const { state } = useLocation();
  const { id, image, amount, price } = state;
  

  return <div><Crd style={{width:'30rem'}} src={state.image} price={state.price} id={state.id}></Crd></div>;
};

export default Product;
