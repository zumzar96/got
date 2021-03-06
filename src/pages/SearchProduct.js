import React from "react";
import Crd from "../components/Card.js";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getProduct } from "../services/products";
import { Fragment } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchProduct = (props) => {
  const { state } = useLocation();
  const { searchedProd } = state; // Read values passed on state
  const { data: product = [], refetch } = useQuery("getProduct", () =>
    getProduct(state.searchedProd)
  );
  const navigate = useNavigate();
  const Onclickhandler = () => {
    navigate("/product", { state: { id: state.searchedProd } });
  };

  useEffect(() => {
    refetch();
  }, [refetch()]);

  return (
    <Fragment>
      {product !== null ? (
        <Container>
          <Row>
            <Col>
              <Crd
                style={{ width: "13rem" }}
                src={product?.image}
                price={product?.cena}
                id={state?.searchedProd}
                onClick={Onclickhandler}
              ></Crd>
            </Col>
          </Row>
        </Container>
      ) : null}
    </Fragment>
  );
};

export default SearchProduct;
