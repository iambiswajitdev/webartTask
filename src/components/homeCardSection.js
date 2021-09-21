import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { righitIcon } from "../utility/commonStatickData";

const HomeCardSection = () => {
  return (
    <>
      <div className="addBox">
        <Container>
          <Row>
            <Col lg={4} xs={12}>
              <div className="homeAddBox">
                <h3>top prodact</h3>
                <h1>
                  trending
                  <br /> shoes
                </h1>
                <Link to="#">shop Now {righitIcon}</Link>
              </div>
            </Col>
            <Col lg={4} xs={12}>
              <div className="homeAddBox Box2">
                <h3>new arrivals</h3>
                <h1>
                  vegan friendly
                  <br /> makeup
                </h1>
                <Link to="#">shop now {righitIcon} </Link>
              </div>
            </Col>
            <Col lg={4} xs={12}>
              <div className="homeAddBox Box3">
                <h3>best seller</h3>
                <h1>
                  fashion apple
                  <br /> accessories
                </h1>
                <Link to="#">shop Now {righitIcon} </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeCardSection;
