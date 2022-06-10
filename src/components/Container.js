import React from "react";
import { useQuery } from "react-query";
import { getTablets } from "../services/products";
import ProductsContainer from "../components/ProdcutsContainer";
import useProduct from "../customHooks/ProductsHook";
import { Container, Row, Col } from "react-bootstrap";

function Cntainer(props) {
  
    return (
      <Container>
        <Row>
          {props.products.map((prod) => (
            <Col>
              <ProductsContainer
                key={prod.id}
                id={prod.id}
                pricee={prod.cena}
                imagee={prod.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  export default Cntainer;
  