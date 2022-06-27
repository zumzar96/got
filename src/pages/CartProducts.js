import React from "react";
import { useSelector } from "react-redux/es/exports";
import Cntainer from "../components/Container";
import { useState } from "react";

const CartProducts = () => {
  const items = useSelector((state) => state.cart.items);
  const [products] = useState(items);

  return <Cntainer products={products} />;
};
export default CartProducts;
