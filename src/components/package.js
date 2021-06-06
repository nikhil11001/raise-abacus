import React from "react";
import {
  Button,
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Carousel,
  NavDropdown,
  Row,
  Col,
  Image,
  Card,
  CardGroup,
  Jumbotron,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import packageIco from "../images/package.png";
import costPackageIco from "../images/box.png";
import "../css/home.css";
import raiseLogo from "../images/rasie-logo.jpeg";

class Package extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light" variant="light" fixed="top">
          <Container>
            <Nav className="mr-auto">
              <Nav.Link className="margin-top-20">
                <Link to="/home">HOME</Link>
              </Nav.Link>
              <Nav.Link className="margin-top-20">
                <Link to="/product">SERVICES</Link>
              </Nav.Link>
              {/* <Nav.Link className="margin-top-20">
                <Link to="/package">PACKAGE</Link>
              </Nav.Link> */}
              <Nav.Link className="margin-top-20">
                <Link to="/about">ABOUT US</Link>
              </Nav.Link>
              <Nav.Link className="margin-top-20">
                <Link to="/contact">CONTACT</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <div style={{ margin: "70px 0px" }}></div>
          <Jumbotron>
            <div className="text-center">
              <Image
                className="location-ico bounce-1"
                src={packageIco}
                width="10%"
              />
              <h1>PACKAGES</h1>
              <hr />
              <Row>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>PACKAGE 1</Card.Header>
                    <Card.Body>
                      <Image src={costPackageIco} width="20%" />
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>PACKAGE 2</Card.Header>
                    <Card.Body>
                      <Image src={costPackageIco} width="20%" />
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>PACKAGE 3</Card.Header>
                    <Card.Body>
                      <Image src={costPackageIco} width="20%" />
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="margin-10">
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>PACKAGE 3</Card.Header>
                    <Card.Body>
                      <Image src={costPackageIco} width="20%" />
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>PACKAGE 4</Card.Header>
                    <Card.Body>
                      <Image src={costPackageIco} width="20%" />
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card border="dark">
                    <Card.Header>PACKAGE 5</Card.Header>
                    <Card.Body>
                      <Image src={costPackageIco} width="20%" />
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Jumbotron>
        </Container>
      </>
    );
  }
}

export default Package;
