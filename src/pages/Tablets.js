import React from "react";
import { useQuery } from "react-query";
import { getTablets } from "../services/products";
import TabletsContainer from "./TabletsContainer";
import useProduct from "../customHooks/ProductsHook";
import { Container, Row, Col } from "react-bootstrap";

function Tablets(props) {
  const { data: Laptops = [] } = useQuery("getTablets", () => getTablets());
  const [products] = useProduct(Laptops);

  return (
    <Container>
      <Row md={4}>
        {products.map((prod) => (
          <Col xs={6}>
            <TabletsContainer
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

export default Tablets;
