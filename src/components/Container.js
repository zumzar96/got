import React from "react";
import ProductsContainer from "../components/ProdcutsContainer";
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
                pricee={prod.price}
                imagee={prod.image}
                amount={prod.amount}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  export default Cntainer;
  