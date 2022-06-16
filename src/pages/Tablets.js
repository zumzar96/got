import React from "react";
import { useQuery } from "react-query";
import { getTablets } from "../services/products";
import useProduct from "../customHooks/ProductsHook";
import Cntainer from "../components/Container";

function Tablets(props) {
  const { data: Tablets = [] } = useQuery("getTablets", () => getTablets());
  const [products] = useProduct(Tablets);

  return <Cntainer products={products} />;
}

export default Tablets;
