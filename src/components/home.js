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
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Chatbot } from "react-chatbot-kit";
import "../css/home.css";
import infoIco from "../images/information.png";
import serviceIco from "../images/settings.png";
import deliveryIco from "../images/teacher.png";
import supplyIco from "../images/abacus.png";
import programmingIco from "../images/statistics.png";
import androidIco from "../images/psychology.png";
import JSIco from "../images/imagination.png";
import rubyIco from "../images/focus.png";
import javaIco from "../images/creativity.png";
import reactIco from "../images/improve.png";
import htmlIco from "../images/brain.png";
import ChatBotIco from "../images/chatbot.png";

import config from "../chatBot/config";
import MessageParser from "../chatBot/MessageParser";
import ActionProvider from "../chatBot/ActionProvider";
import Banner1 from "../images/banner1.jpg";
import Banner2 from "../images/banner2.jpg";
import Banner3 from "../images/banner3.jpg";
import raiseLogo from "../images/rasie-logo.jpeg";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChatBot: false,
    };
  }
  render() {
    return (
      <>
        {/* <Navbar collapseOnSelect bg="light" variant="light" fixed="top" expand="sm"> */}
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
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner3} />
            <Carousel.Caption>
              <h1>Raise your child's future with RAISE ABACUS</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Banner1} />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.insidehighered.com/sites/default/server_files/media/Inside%20Digital%20Learning/iStock-872232248.jpg"
            />
            <Carousel.Caption>
              <h1>Raise your career with RAISE ABACUS</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>
          <div className="slogna-text"></div>

          <Row className="margin-top-30">
            <div className="text-center">
              <div className="padding-4-rem">
                <Image
                  className="location-ico bounce-1"
                  src={infoIco}
                  width="20%"
                />
              </div>
              {this.state.showChatBot && (
                <div className="chat-bot-container">
                  <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                  />
                </div>
              )}
              <h1 className="text-center">WHO ARE WE ?</h1>
              <hr />
              <i>
                We are <b>Raise Abacus Academy</b> working in ABACUS field in
                last 15 years. Due to our quality education service and Research
                in abacus , we are present in all over india. We developed 560+
                trainers in Abacus and gives benefit of 90000 + student.
              </i>
              <p className="text-center margin-top-10">
                <i class="bi bi-star-fill margin-10"></i>
                <i class="bi bi-star-fill margin-10"></i>
                <i class="bi bi-star-fill margin-10"></i>
                <i class="bi bi-star-fill margin-10"></i>
                <i class="bi bi-star-fill margin-10"></i>
              </p>
            </div>
          </Row>

          <div className="text-center">
            <div className="padding-4-rem">
              <Image
                className="location-ico bounce-1"
                src={serviceIco}
                width="15%"
              />
            </div>
            <h1>SERVICES</h1>
            <hr />
            <i>
              We engage in all stages of product development, right from design
              to implementation and support. We deliver quality software using
              multiple models and are flexible to implement other models as per
              the requirements of the solution or the client.
            </i>
            <div className="margin-60 service-border">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="padding-20-px">
                  <Col sm={4}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          ABACUS TEACHER TRAINING & FRANCHISE
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          STUDENT ABACUS LEARNING
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Container className="grey-left-border">
                          <Image
                            src={deliveryIco}
                            width="10%"
                            className="margin-10"
                          />
                          <h3>ABACUS TEACHER TRAINING & FRANCHISE</h3>
                          <h5>OWNING THE ENTIRE SOLUTION</h5>
                          <br />
                          <p>
                            <i>
                              We provide systematic training & business
                              guidance. Raise Abacus guides you with less
                              investment & more profit - oriented business
                              concept.
                            </i>
                          </p>
                        </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Container className="grey-left-border">
                          <Image
                            src={supplyIco}
                            width="10%"
                            className="margin-10"
                          />
                          <h3> STUDENT ABACUS LEARNING</h3>
                          <h5>BUILD, OPERATE, AND TRANSFER KNOWLEDGE </h5>
                          <br />
                          <p>
                            <i>
                              According to well known researchers, Abacus
                              training has a positive effect on children
                              especially when it is practised regularly. It was
                              observed that students who received abacus
                              training were recognised to have high levels of
                              concentration and memory.
                            </i>
                          </p>
                        </Container>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
          {/* <div className="margin-top-30">
            <Jumbotron>
              <p>
                <i>
                  We engage in all stages of product development, right from
                  design to implementation and support. We deliver quality
                  software using multiple models and are flexible to implement
                  other models as per the requirements of the solution or the
                  client.
                </i>
              </p>
            </Jumbotron>
          </div> */}
        </Container>

        <div className="text-center">
          <div className="padding-4-rem">
            <Image
              className="location-ico bounce-1"
              src={programmingIco}
              width="15%"
            />
          </div>
          <h1>BENEFITS OF LEARNING ABACUS</h1>
          <hr />
          <Container>
            <Jumbotron>
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Improves Confidence</Card.Title>
                      <Card.Text>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%",
                          }}
                        >
                          <Image src={reactIco} width="50%" />
                        </motion.div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        Enhances Visualization & Imagination
                      </Card.Title>
                      <Card.Text>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{
                            scale: 0.8,
                            rotate: -100,
                            borderRadius: "100%",
                          }}
                        >
                          <Image src={javaIco} width="50%" />
                        </motion.div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>GYM FOR BRAIN</Card.Title>
                      <Card.Text>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%",
                          }}
                        >
                          <Image src={htmlIco} width="50%" />
                        </motion.div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Improves Concentration</Card.Title>
                      <Card.Text>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%",
                          }}
                        >
                          <Image src={rubyIco} width="50%" />
                        </motion.div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Super Memory Charger</Card.Title>
                      <Card.Text>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%",
                          }}
                        >
                          <Image src={androidIco} width="50%" />
                        </motion.div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Boosts Creativity</Card.Title>
                      <Card.Text>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%",
                          }}
                        >
                          <Image src={JSIco} width="50%" />
                        </motion.div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Jumbotron>
          </Container>
        </div>

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
            <div className="chat-bot-ico">
              <Image
                className="location-ico bounce-1"
                src={ChatBotIco}
                width="5%"
                onClick={() => {
                  this.setState({ showChatBot: !this.state.showChatBot });
                }}
              />
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Home;
