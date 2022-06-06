import React from "react";
import { Fragment } from "react";
import { useQuery } from "react-query";
import ProductsContainer from "./LaptopContainer";
import useProduct from "../customHooks/ProductsHook";
import { Container, Row, Col } from "react-bootstrap";
import Laptops from "./Laptops";
import Tablets from "./Tablets";
import Offcan from "../components/Offcanvas";

function Products(props) {
  

  return (
    <Fragment>
      <Laptops />
      <Tablets />
    </Fragment>
  );
}

export default Products;
