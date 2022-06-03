import React from "react";
import { useQuery } from "react-query";
import { getLaptops } from "../services/products";
import LaptopsContainer from "./LaptopContainer";
import useProduct from "../customHooks/ProductsHook";
import { Container, Row, Col } from "react-bootstrap";

function Laptops(props) {
  const { data: Laptops = [] } = useQuery("getLaptops", () => getLaptops());
  const [products] = useProduct(Laptops);

  return (
    <Container>
      <Row>
        {products.map((prod) => (
          <Col>
            <LaptopsContainer
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

export default Laptops;
