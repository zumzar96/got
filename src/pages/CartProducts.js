import React from "react";
import { Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux/es/exports";
import Cntainer from "../components/Container";

const CartProducts = () => {
    const items = useSelector((state) => state.cart.items);
    
  return (
    <></>
  );
};
export default CartProducts;