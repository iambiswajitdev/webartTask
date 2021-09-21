import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandBox from "./brandBox";

const PopulerBrand = ({ title }) => {
  return (
    <>
      <div className="brandSection">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="brandCatagorisTitle">{title}</h2>
            </Col>
          </Row>
          <Row>
            <BrandBox />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PopulerBrand;
