import React from "react";
import { Col, Row, Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { topManuList } from "../utility/commonStatickData";

const TopBar = () => {
  return (
    <>
      <div className="topBar">
        <Container>
          <Row>
            <Col lg={5} xs={12}>
              <h3 className="topBarHeading">welcome to marketplace</h3>
            </Col>
            <Col lg={7} xs={12}>
              <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <NavDropdown
                      className="topManu"
                      title="USD"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        country 1
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        country 2
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        country 3
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown
                      className="topManu"
                      title="ENG"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        languages 1
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        languages 2
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        languages 3
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                    </NavDropdown>
                    {topManuList.map((item, index) => (
                      <Link className="topManu" to="#" key={index}>
                        {item.manu}
                      </Link>
                    ))}
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

export default TopBar;
