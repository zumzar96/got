import React from "react";
import { useQuery } from "react-query";
import { getTablets } from "../services/products";
import TabletsContainer from "./TabletsContainer";
import useProduct from "../customHooks/ProductsHook";

function Tablets(props) {
  const { data: Laptops = [] } = useQuery("getTablets", () => getTablets());
  const [products] = useProduct(Laptops);

  return (
    <div>
      {products.map((prod) => (
        <TabletsContainer
          key={prod.id}
          id={prod.id}
          pricee={prod.cena}
          imagee={prod.image}
        />
      ))}
    </div>
  );
}

export default Tablets;
