import React from "react";
import Crd from "./Card.js";
import { Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../store/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import MydModalWithGrid from "./Modal.js";
import { useState, useEffect, Fragment } from "react";
import { modalActions } from "../store/modalSlice.js";

const ProductsContainer = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Onclickhandler = () => {
    dispatch(modalActions.toggleModalnavigate());
    navigate("/product", {
      state: {
        id: props.id,
        image: props.imagee,
        amount: 1,
        price: props.pricee,
      },
    });
  };
  const onClichandler = () => {
    dispatch(
      cartActions.addtoCart({
        image: props.imagee,
        id: props.id,
        amount: 1,
        price: props.pricee,
      })
    );
  };
  const onClikhandler = () => {
    dispatch(
      cartActions.removefromCart({
        id: props.id,
      })
    );
  };

  return (
    <Fragment>
      <Crd
        style={{ width: "13rem" }}
        src={props.imagee}
        id={props.id}
        price={props.pricee}
        amount={props.amount}
        onClick={Onclickhandler}
        onClic={onClichandler}
        onClik={onClikhandler}
      />
    </Fragment>
  );
};

export default ProductsContainer;
