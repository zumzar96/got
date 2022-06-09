import React from "react";
import Crd from "../components/Card.js";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getProduct } from "../services/products";
import { Fragment } from "react";


const Product = (props) => {
  const { state } = useLocation();
  const { id } = state; // Read values passed on state
  const { data: product = [] } = useQuery("getProduct", () =>
    getProduct(state.id)
  );

  return <Crd style={{width:'40rem'}} src={product.image}></Crd>;
};

export default Product;
