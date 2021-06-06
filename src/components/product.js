import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Jumbotron,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import suitcaseIco from "../images/training.png";
import raiseLogo from "../images/rasie-logo.jpeg";
import abacusIco from "../images/abacus.png";
import "../css/home.css";

class Product extends React.Component {
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
          <div style={{ margin: "70px 0px" }}></div>
          <div className="text-center">
            <div className="padding-4-rem">
              <Image
                className="location-ico bounce-1"
                src={suitcaseIco}
                width="20%"
                fluid
                rounded
              />
            </div>
            <h1>
              <i className="bi bi-vinyl-fill margin-right-10" />
              ABACUS TEACHER TRAINING AND FRANCHISE
            </h1>
            <h3>"RAISE YOUR CAREER WITH RAISE ABACUS"</h3>
            <hr />
            <Jumbotron className="service-jumbotron">
              <h5>
                <b>Raise Abacus Learning School (ISO 9001:2015 certified),</b>{" "}
                offers quick and step by step abacus teacher training course at
                a reasonable cost which is affordable to all RAISE Franchise is
                a great business opportunity knocking your door. Our franchise
                support network helps franchisees reach their personal and
                business goals with a complete system including both business
                processes and educational curriculum. Raise Abacus Learning
                centre is your own Business with ‘Nominal Investment &
                Phenomenal Returns’. It is the perfect choice of a feasible
                business with low investment and high returns. You become an
                entrepreneur gaining the financial freedom in a very short
                period besides a gratifying experience of being a part of a
                noble profession.
              </h5>
            </Jumbotron>
          </div>
          <h3 className="text-center">Why Raise Abacus Franchisee ?</h3>
          <br />
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Low Initial Investment
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Low operating expenses and overhead
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Previous education industry experience is not required
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Work full or part-time
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              No royalty
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              No Franchise Renewal Charges
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Most economical Student Kits and level wise study material
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Door-step delivery of Abacus Training material and student-kits
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Mobile App for student progress monitoring and their management
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Designs / Art works for promotional material
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Digital / Social Media Marketing / branding
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Complete support for school tie-ups
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />A committed
              franchisor to your success and your long-term growth
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Lifelong Membership and support to develop business
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Methodical guidance or training to realise maximum student’s
              enrollment
            </h5>
          </p>
          <div className="text-center">
            <div className="padding-4-rem">
              <Image
                className="location-ico bounce-1"
                src={abacusIco}
                width="20%"
                fluid
                rounded
              />
            </div>

            <h1>
              <i className="bi bi-vinyl-fill margin-right-10" />
              ABACUS TRAINING FOR KIDS
            </h1>
            <h3>"RAISE YOUR CHILD'S FUTURE WITH RAISE ABACUS"</h3>
            <hr />
          </div>
          <div className="text-center">
            <Jumbotron className="service-jumbotron">
              <h5>
                <b>Raise Abacus (ISO 9001:2015 certified),</b>
                provides affordable online Abacus training for kids through our
                certified trainers. You get quality education from the comfort
                of your home. Your child is given individual attention resulting
                in excellent results.
                <br />
                <br />
                Abacus training for kids is universally accepted 'Complete Brain
                Development' program which activates both Left and Right
                Hemispheres of a child's brain. RAISE Abacus classes are not
                only about Mental Math or improving Mental Arithmetic
                Calculation, but also helps to excel in all the subjects.
              </h5>
            </Jumbotron>
            <h3>Why Raise Abacus?</h3>
          </div>
          <br />
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Affordable training fees
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Well planned online training program
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Interesting and engaging teaching Method
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Well designed books specially for kids
            </h5>
          </p>

          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Get trained by certified abacus teacher
            </h5>
          </p>
          <p>
            <h5>
              <i class="bi bi-trophy-fill margin-right-10" />
              Organize various competitions
            </h5>
          </p>
          <br />
          <h4 className="text-center">
            Following are the details for the Abacus Training for Kids
          </h4>
          <br />
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th>Duration</th>
                <th>
                  Students can complete the course in 2 years by practising at
                  least 15 minutes daily.
                </th>
              </tr>
              <tr>
                <th>Eligibility</th>
                <th>Children of age group 6-14 years.</th>
              </tr>
              <tr>
                <th>Syllabus</th>
                <th>
                  Addition, Subtraction, Multiplication, Division with Abacus
                  and Mental calculation.
                </th>
              </tr>
              <tr>
                <th>Support</th>
                <th>24x7 through telephone, WhatsApp, Email</th>
              </tr>
              <tr>
                <th>Certification</th>
                <th>
                  After the successful completion of each level of the course.
                </th>
              </tr>
              <tr>
                <th>Levels Covered</th>
                <th>8</th>
              </tr>
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}

export default Product;
