import React from "react";
import Crd from "./Card.js";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../store/cartSlice.js";
import { useDispatch } from "react-redux";

const ProductsContainer = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Onclickhandler = () => {
    navigate("/product", { state: { id: props.id } });
  };
  const onClichandler = (item) => {
    dispatch(
      cartActions.addtoCart(
        (item = {
          image: props.imagee,
          id: props.id,
          amount: 1,
          price: props.pricee,
        })
      )
    );
  };

  return (
    <Crd
      style={{ width: "13rem" }}
      src={props.imagee}
      id={props.id}
      price={props.pricee}
      onClick={Onclickhandler}
      onClic={onClichandler}
    />
  );
};

export default ProductsContainer;
