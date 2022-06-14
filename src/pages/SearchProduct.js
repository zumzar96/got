import React from "react";
import Crd from "../components/Card.js";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getProduct } from "../services/products";
import { Fragment } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const SearchProduct = (props) => {
  const { state } = useLocation();
  const { searchedProd } = state; // Read values passed on state
  const { data: product = [], refetch } = useQuery("getProduct", () =>
    getProduct(state.searchedProd)
  );
  useEffect(() => {
    refetch();
  }, [searchedProd]);
  return (
    <Container>
      <Row>
        <Col>
          <Crd
            style={{ width: "13rem" }}
            src={product.image}
            price={product.cena}
            id={state.searchedProd}
          ></Crd>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchProduct;
