import React from "react";
import Crd from "./Card.js";
import { useNavigate } from "react-router-dom";

const ProductsContainer = (props) => {
  const navigate = useNavigate();
  const Onclickhandler = () => {
    navigate("/product", { state: { id: props.id } });
  };

  return <Crd style={{width:'13rem'}} src={props.imagee} id={props.id} price={props.pricee} onClick={Onclickhandler} />;
};

export default ProductsContainer;