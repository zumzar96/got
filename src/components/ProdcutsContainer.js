import React from "react";
import Crd from "./Card.js";
import { useNavigate } from "react-router-dom";
import { store } from "../store.js";
import { cartActions } from "../store/cartSlice.js";

const ProductsContainer = (props) => {
  const navigate = useNavigate();
  const Onclickhandler = () => {
    navigate("/product", { state: { id: props.id } });
  };
  const onClichandler = () => {
    store.dispatch(cartActions.addtoCart(props.pricee));
  };
  

  return <Crd style={{width:'13rem'}} src={props.imagee} id={props.id} price={props.pricee} onClick={Onclickhandler} onClic={onClichandler}/>;
};

export default ProductsContainer;