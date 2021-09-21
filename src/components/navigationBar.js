import React from "react";
import { Col, Row, Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  navigationItem,
  locationIcon,
  dailsIcon,
} from "../utility/commonStatickData";
const NavigationBar = () => {
  return (
    <>
      <div className="navigationBar">
        <Container>
          <Row>
            <Col lg={12}>
              <Navbar expand="lg">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <NavDropdown
                  title="Browse catagories"
                  id="navbarScrollingDropdown"
                  className="browseCatagori"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>

                <Navbar.Collapse id="navbarScroll">
                  <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
                    <ul className="navigationManuBar">
                      {navigationItem.map((item, index) => (
                        <li key={index}>
                          <Link to={item.route}>{item.manu}</Link>
                        </li>
                      ))}
                    </ul>
                    <Link href="#" className="navigationRightManu">
                      {locationIcon} track order
                    </Link>
                    <Link href="#" className="navigationRightManu ml-0">
                      {dailsIcon} daily deals
                    </Link>
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

export default NavigationBar;
