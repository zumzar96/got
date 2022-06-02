import React from "react";
import { useQuery } from "react-query";
import { getProducts } from "../services/products";
import ProductsContainer from "./LaptopContainer";
import useProduct from "../customHooks/ProductsHook";
import {Container, Row,Col} from 'react-bootstrap'

function Products(props) {
  const { data: Products = [] } = useQuery("getProducts", () => getProducts());
  const [products] = useProduct(Products);

  return (
    <Container>
      <Row xl>
      {products.map((prod) => (
        <Col><ProductsContainer
          key={prod.id}
          id={prod.id}
          pricee={prod.cena}
          imagee={prod.image}
        /></Col>
      ))}
      </Row>
    </Container>
  );
}

export default Products;
