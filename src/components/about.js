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
import aboutUsIcon from "../images/aboutUs.png";
import raiseLogo from "../images/rasie-logo.jpeg";

class About extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light" variant="light" fixed="top">
          <Container>
            <Nav className="mr-auto">
              <Image src={raiseLogo} width="10%" />
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
          <div className="about-us">
            <Image
              src={aboutUsIcon}
              className="location-ico bounce-1"
              width="10%"
            />
            <h3>
              Raise Abacus provides a wide range of specially-designed creative
              and interactive enrichment programs. The curriculum is tailored to
              suit varying needs and interests, from the performing arts to
              language studies. Backed by over 15+ years of management and
              professional expertise, Raise Abacus continually explores
              innovative teaching methods to help students maximize their
              learning potential.
            </h3>
          </div>
          <div className="margin-top-30">
            <Jumbotron>
              <Card>
                <Card.Header>
                  <b>ISO 9001:2015 Certified Institute</b>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Raise Abacus is a professionally managed And ISO 9001:2015
                    Certified Institute which started since 15+ years with its
                    presence in 20 States of India now and Raise Abacus is also
                    providing training , Materials And Franchise for foreign
                    countries.In India, Raise Abacus is proving Free Franchise
                    in Abacus For teachers . Raise Abacus Provids quality
                    training to teachers.so any person, institute, schools or
                    anybody could open own Educational center at very low
                    insvestment. The Raise Abacus designed Courses for students
                    in the age group of 6-14 years and also Job Seeker . These
                    courses promote Whole Brain development by stimulating both
                    sides of brain along with enhancement in skills, which leads
                    to greater confidence in students to succeed in School
                    Curriculum& also in all walks of life. Raise Abacus is glad
                    to offer exclusive Free Abacus Franchise, Abacus Training as
                    well as Franchise & Training for every Course offered by the
                    Company to dedicated teachers/individuals/institutions with
                    very little investment.
                    <b>
                      Raise Abacus’s Director Mr. Amol Gawner believes in
                      nurturing talents & supporting each Franchise by providing
                      Continuous Training Support till he/she becomes
                      independent in terms of all the business aspects.
                    </b>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
              <br />
              <Card>
                <Card.Header>
                  <b>Mission Statement</b>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    RaiseAbacus is committed to helping every individual develop
                    his / her full potential. Raise Your Future or Career with
                    RAISE ABACUS.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
              <br />
              <Card>
                <Card.Header>
                  <b>Our Philosophy</b>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Raise Abacue believes that everyone has inborn talents, and
                    that given the right nurturing, these talents can be
                    discovered and nurtured. Every individual can be a star in
                    his/her own right.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Jumbotron>
          </div>
        </Container>

        <div
          className="margin-top-30"
          style={{ background: "black", color: "white" }}
        >
          <Container>
            <Row>
              <Col md={4}>
                <h6 className="margin-10">LINKS</h6>
                <div>
                  <p>
                    {" "}
                    <i className="bi bi-house-door margin-10"></i>HOME
                  </p>
                  <p>
                    <i className="bi bi-person margin-10"></i>ABOUT US{" "}
                  </p>
                  <p>
                    <i className="bi bi-screwdriver margin-10"></i>SERVICES
                  </p>
                  <p>
                    <i className="bi bi-telephone margin-10"></i>Contact
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <h6 className="margin-10">CONTACT</h6>
                <p>
                  <i class="bi bi-cursor margin-10"></i>Flat No - 402, Ekdant
                  Apt. Amba Colony, Near Adivasi Hostel, Amravati, Maharashtra
                  44460
                </p>

                <p>
                  <i class="bi bi-phone margin-10"></i>Phone:+91 77450 29284,
                  +91 7219585305
                </p>

                <p>
                  <i class="bi bi-envelope-open margin-10"></i>Email:
                  raiseabacus2020@gmail.com
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default About;
