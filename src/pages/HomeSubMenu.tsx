import { Container, Carousel, Row, Col, Button } from "react-bootstrap";
import constructionImage from "../assets/underconstruction.png";
import xrayImage from "../assets/CF_Chest Xray.png";
import treadmillImage from "../assets/CF_Treadmill.png";
import checkUpImage from "../assets/CheckUp.png";

const HomeSubMenu = () => (
  <Container className="home-custom-container-image">
    <div className="div-why-us background-gradient">
      <div className="row">
        <div className="col-md-6 p-4">
          <h1 className="align-left text-color-red other-title">Why Us?</h1>
          <p className="align-left text-color-blue">
            <b>Full Facilities Centres</b>
            <br />
            Our one-stop medical centres are fully equipped with X-rays,
            Spirometry, Audiometry, ECG, ECG Treadmill and Drug/Alcohol Screens.
            This allows us the capability to conduct a full range of tests in a
            single location thereby saving time and man hours for your
            corporate.
          </p>
        </div>
        <div className="col-md-6 p-4">
          <div className="row">
            <div className="col-6 p-0">
              <img
                src={xrayImage}
                alt="icon"
                className="image-fluid mx-auto d-block"
              />
            </div>
            <div className="col-6 p-0">
              <img
                src={treadmillImage}
                alt="icon"
                className="image-fluid mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 p-4">
          <p className="align-left text-color-blue">
            <b>Direct Access to Coordinators</b>
            <br />
            Each client is assigned a coordinator to facilitate communications
            with the medical centre.
          </p>
        </div>
        <div className="col-md-6 p-4">
          <p className="align-left text-color-blue">
            <b>Ease of Access</b>
            <br />
            Our full facilities medical centres are conveniently located at
            Jurong East Central (near Jurong East MRT) and Robinson Road (near
            Tanjong Pagar MRT).
          </p>
        </div>
      </div>
    </div>
    <div className="div-why-us background-gradient">
      <div className="row">
        <div className="col-md-6 p-4">
          <h1 className="align-left text-color-red other-title">
            How We Can Help?
          </h1>
          <img
            src={checkUpImage}
            alt="icon"
            className="image-fluid mx-auto d-block"
          />
        </div>
        <div className="col-md-6 p-4">
          <p className="align-left text-color-blue">
            <br />
            <b>
              We recognize that each patient, company or organization has their
              own different medical requirements. Our team are committed to
              learn, understand and fulfil these needs.
            </b>
          </p>
          <p className="align-left text-color-blue">
            <br />
            <b>Medical Support for your HR/ HSE Department</b>
            <br />
            <br />
            <ul className="text-color-grey">
              <li>Fitness to Work/ Return to Work assessment</li>
              <li>Prolonged illness assessment</li>
              <li>Managing workplace injuries or diseases effectively</li>
              <li>
                Providing recommendations to employees’ work circumstances.
              </li>
              <li>
                Advice on compliance to statutory and non-statutory hazard
                exposure guidelines.
              </li>
              <li>
                Support on compliance to local or international guidelines such
                as OSHA/NIOSH.
              </li>
              <li>
                Consultancy and support on your corporate emergency medical
                response plan.
              </li>
              <li>Consultancy and support on the first aid requirements.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    <div className="spacer"></div>
    <div className="row div-who-we-serve">
      <div className="col">
        <br />
        <h1 className="align-center text-color-red">Who We Serve</h1>
      </div>
    </div>
    <div className="row div-who-we-serve text-color-blue">
      <div className="col-md-2 align-left"></div>
      <div className="col-md-3 align-left">
        <br />
        <ul className="text-color-blue-bold-2">
          <li>Oil and Gas industry</li>
          <li>Maritime industry</li>
          <li>Banking and Finance industry</li>
        </ul>
        <br />
      </div>
      <div className="col-md-3 align-left">
        <br />
        <ul className="text-color-blue-bold-2 ">
          <li>Aerospace industry</li>
          <li>Pharmaceutical industry</li>
          <li>Semi-Conductor industry</li>
        </ul>
        <br />
      </div>
      <div className="col-md-3 align-left">
        <br />
        <ul className="text-color-blue-bold-2">
          <li>Food and beverage industry</li>
          <li>Manufacturing industry</li>
          <li>Construction industry</li>
        </ul>
        <br />
      </div>
      <div className="col-md-1 align-left"></div>
    </div>
    <div className="row div-latest-news">
      <div className="col-lg-12">
        <br />
        <h1 className="align-center text-color-red">Latest News</h1>
        <br />
        {/* Remove Later */}
        <div className="spacer"></div>
        <div className="centered-container">
          <img
            src={constructionImage}
            alt="Under Construction"
            className="construction-image-home"
          />
        </div>
        {/* <div className="carousel-wrapper">
          <Carousel indicators={false} controls={true}>
            <Carousel.Item>
              <Row>
                <Col className="col-md-4">
                  <img
                    src={carouselImage1}
                    alt="Company logo"
                    className="d-block w-100"
                  />
                  <div className="text-padding text-color-blue">
                    <p className="align-left">
                      <b>Lorem Ipsum Dolor Sit Amet Consectetur (1)</b>
                      <br />
                      Sed euismod, neque eu convallis molestie, tortor augue
                      tempor tortor, eget suscipit turpis eros quis purus.
                      <br /> <br />
                      <b>Read More</b>
                    </p>
                  </div>
                </Col>
                <Col className="col-md-4">
                  <img
                    src={carouselImage2}
                    alt="Company logo"
                    className="d-block w-100"
                  />
                  <div className="text-padding text-color-blue">
                    <p className="align-left">
                      <b>Lorem Ipsum Dolor Sit Amet Consectetur (2)</b>
                      <br />
                      Sed euismod, neque eu convallis molestie, tortor augue
                      tempor tortor, eget suscipit turpis eros quis purus.
                      <br /> <br />
                      <b>Read More</b>
                    </p>
                  </div>
                </Col>
                <Col className="col-md-4">
                  <img
                    src={carouselImage3}
                    alt="Company logo"
                    className="d-block w-100"
                  />
                  <div className="text-padding text-color-blue">
                    <p className="align-left">
                      <b>Lorem Ipsum Dolor Sit Amet Consectetur (3)</b>
                      <br />
                      Sed euismod, neque eu convallis molestie, tortor augue
                      tempor tortor, eget suscipit turpis eros quis purus.
                      <br /> <br />
                      <b>Read More</b>
                    </p>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col className="col-md-4">
                  <img
                    src={carouselImage3}
                    alt="Company logo"
                    className="d-block w-100"
                  />
                  <div className="text-padding text-color-blue">
                    <p className="align-left">
                      <b>Lorem Ipsum Dolor Sit Amet Consectetur (4)</b>
                      <br />
                      Sed euismod, neque eu convallis molestie, tortor augue
                      tempor tortor, eget suscipit turpis eros quis purus.
                      <br /> <br />
                      <b>Read More</b>
                    </p>
                  </div>
                </Col>
                <Col className="col-md-4">
                  <img
                    src={carouselImage1}
                    alt="Company logo"
                    className="d-block w-100"
                  />
                  <div className="text-padding text-color-blue">
                    <p className="align-left">
                      <b>Lorem Ipsum Dolor Sit Amet Consectetur (5)</b>
                      <br />
                      Sed euismod, neque eu convallis molestie, tortor augue
                      tempor tortor, eget suscipit turpis eros quis purus.
                      <br /> <br />
                      <b>Read More</b>
                    </p>
                  </div>
                </Col>
                <Col className="col-md-4">
                  <img
                    src={carouselImage2}
                    alt="Company logo"
                    className="d-block w-100"
                  />
                  <div className="text-padding text-color-blue">
                    <p className="align-left">
                      <b>Lorem Ipsum Dolor Sit Amet Consectetur (6)</b>
                      <br />
                      Sed euismod, neque eu convallis molestie, tortor augue
                      tempor tortor, eget suscipit turpis eros quis purus.
                      <br /> <br />
                      <b>Read More</b>
                    </p>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
          <div className="spacer"></div>
          <div className="spacer"></div>
          <div className="spacer"></div>
        </div> */}
      </div>
    </div>
  </Container>
);

export default HomeSubMenu;
