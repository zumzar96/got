import React from "react";
import { useSelector } from "react-redux/es/exports";
import MydModalWithGrid from "../pages/Cart";
import { orderCart } from "../services/cart";
import { useMutation } from "react-query";
import { Button } from "react-bootstrap";


const CartOrderButton = (props) => {
  const items = useSelector((state) => state.cart.items);
  const mutation = useMutation((info) => orderCart(info));

  const orderHandler = (e) => {
    e.preventDefault();
    console.log('sss')
    mutation.mutate({
      name:'ismial', 
      items
    });
  };

  return <Button onClick={orderHandler}>Order</Button>;
};
export default CartOrderButton;
