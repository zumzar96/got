import React from "react";
import { useSelector } from "react-redux/es/exports";
import Cntainer from "../components/Container";
import { Fragment, useEffect, useState } from "react";

const CartProducts = () => {
  const items = useSelector((state) => state.cart.items);

  return <Cntainer products={items} />;
};
export default CartProducts;
