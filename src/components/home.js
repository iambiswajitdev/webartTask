import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { bannerImg } from "../utility/commonStatickData";
import Banner from "./banner";
import Features from "./features";
import HomeCardSection from "./homeCardSection";
import PopulerBrand from "./populerBrand";
import Sidebar from "./sidebar";

const Home = () => {
  return (
    <>
      <div className="homeSection">
        <Container>
          <Row>
            <Col lg={3} xs={12}>
              <Sidebar />
            </Col>
            <Col lg={9} xs={12}>
              <Banner bannerImg={bannerImg} />
            </Col>
          </Row>
        </Container>
        <HomeCardSection />
        <Features />
        <PopulerBrand title="most popular brand" />
      </div>
    </>
  );
};

export default Home;
