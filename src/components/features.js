import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { features } from "../utility/commonStatickData";

const Features = () => {
  return (
    <div className="homeFeatures">
      <Container>
        <div className="homeFeaturesBox">
          <Row>
            {features.map((item, index) => (
              <Col lg={3} xs={12} key={index}>
                <Row>
                  <Col lg={3} xs={12}>
                    <span className="featuresIcon">{item.icon}</span>
                  </Col>
                  <Col lg={9} xs={12}>
                    <Row className="mobileView">
                      <h3 className="featuresTitle">{item.title}</h3>
                      <p className="featuresDec">{item.decrib}</p>
                    </Row>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Features;
