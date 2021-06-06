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
import "../css/home.css";
import mapIcon from "../images/placeholder.png";
import raiseLogo from "../images/rasie-logo.jpeg";

class Contact extends React.Component {
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
          {/* <h1>Contact</h1> */}
          <Row>
            <Col md={6}>
              <h3 className="margin-top-10">CONTACT DETAILS</h3>
              <p>
                <i className="bi bi-globe2 margin-10" />
                <span>Flat No - 402, Ekdant Apt. Amba Colony,</span>
                <p className="margin-10">
                  Near Adivasi Hostel, Amravati, Maharashtra 44460
                </p>
              </p>
              <p>
                <i className="bi bi-telephone margin-10" />
                +91 77450 29284, +91 7219585305
              </p>
              <p>
                <i class="bi bi-envelope-open margin-10"></i>
                raiseabacus2020@gmail.com
              </p>
            </Col>
            <Col md={6}>
              <h3 className="margin-top-10">GET IN TOUCH</h3>
              <div>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile No" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" placeholder="Enter Message" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="margin-top-30">
          <Jumbotron>
            <h1 className="text-center">
              FIND US HERE ...
              <Image
                className="location-ico bounce-1"
                src={mapIcon}
                width="6%"
              />
            </h1>

            <div style={{ margin: "20px 0" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14908.187499258072!2d77.7652346!3d20.9104337!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x53f7667cc96db5cd!2sRAISE%20ABACUS%20ACADEMY!5e0!3m2!1sen!2sin!4v1622963993906!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Jumbotron>
        </div>
      </>
    );
  }
}

export default Contact;
