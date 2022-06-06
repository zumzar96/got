import React from "react";
import { Fragment } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../services/products";
import ProductsContainer from "./LaptopContainer";
import useProduct from "../customHooks/ProductsHook";
import { Container, Row, Col } from "react-bootstrap";
import Laptops from "./Laptops";
import Tablets from "./Tablets";

function Products(props) {
  const { data: Products = [] } = useQuery("getProducts", () => getProducts());
  const [products] = useProduct(Products);

  return (
    <Fragment>
      <div className='wrapper'>
      <Laptops/>
      <Tablets/>
      </div>
    </Fragment>
  );
}

export default Products;
