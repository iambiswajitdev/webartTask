import React from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  logo,
  searchIcon,
  phoneIcon,
  headerManu,
} from "../utility/commonStatickData";

const Header = () => {
  return (
    <>
      <div className="header">
        <Container>
          <Row>
            <Col lg={2} xs={12}>
              <Link to="/">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
              </Link>
            </Col>
            <Col lg={10}>
              <Navbar expand="lg">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav>
                    <Form className="mainSeacrh d-flex">
                      <NavDropdown
                        title="all categories"
                        id="basic-nav-dropdown"
                        className="allCatagori"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          categories 1
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          categories 2
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          categories 3
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                      </NavDropdown>
                      <FormControl
                        type="search"
                        placeholder="Search in ..."
                        className="mr-2 headerSearchFild"
                        aria-label="Search"
                      />
                      <Button className="searchBtn">{searchIcon}</Button>
                    </Form>
                    <div className="HeaderContact">
                      <Row>
                        <Col lg={4} xs={12}>
                          <Row>
                            <Col lg={3} xs={12}>
                              <span className="headerIcon">{phoneIcon}</span>
                            </Col>
                            <Col lg={9} xs={12}>
                              <p>call us Now: </p>
                              <h1>+745566575</h1>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={8} xs={12} className="contactCont">
                          {headerManu.map((item, index) => (
                            <Link to="#" key={index} className="headerManuItem">
                              <span className="headerManuIcon">
                                {item.icon}
                              </span>
                              {item.manu}
                            </Link>
                          ))}
                          <Link to="#" className="headerManuItem">
                            <div className="cartItem">1</div>
                            <span className="addToCartIcon">
                              <i class="fas fa-shopping-bag"></i>
                            </span>
                            cart
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
