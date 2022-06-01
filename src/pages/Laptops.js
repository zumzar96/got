import React from "react";
import { useQuery } from "react-query";
import { getLaptops } from "../services/products";
import LaptopsContainer from "./LaptopContainer";
import useProduct from "../customHooks/ProductsHook";

function Laptops(props) {
  const { data: Laptops = [] } = useQuery("getLaptops", () => getLaptops());
  const [products] = useProduct(Laptops);

  return (
    <div className="wrapper">
      {products.map((prod) => (
        <LaptopsContainer
          key={prod.id}
          id={prod.id}
          pricee={prod.cena}
          imagee={prod.image}
        />
      ))}
    </div>
  );
}

export default Laptops;
