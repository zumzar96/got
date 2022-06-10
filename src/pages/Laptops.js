import React from "react";
import { useQuery } from "react-query";
import { getLaptops } from "../services/products";
import useProduct from "../customHooks/ProductsHook";
import Cntainer from "../components/Container";



function Laptops(props) {
  const { data: Laptops = [] } = useQuery("getLaptops", () => getLaptops());
  const [products] = useProduct(Laptops);

  return (
    <Cntainer products={products} />
  );
}

export default Laptops;
