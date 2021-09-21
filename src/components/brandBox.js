import React from "react";
import { Col } from "react-bootstrap";
import { homeBrand } from "../utility/commonStatickData";

const BrandBox = () => {
  return (
    <>
      {homeBrand.map((item, index) => (
        <Col lg={2} xs={12}>
          <div className="brandBox" key={index}>
            <img src={item.img} alt="" />
          </div>
          <h2 className="bradTitle">{item.title}</h2>
        </Col>
      ))}
    </>
  );
};

export default BrandBox;
