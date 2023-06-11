import { Container, Carousel, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import carouselImage1 from "../assets/carousell_image_1.png";
import carouselImage2 from "../assets/carousell_image_2.png";
import carouselImage3 from "../assets/carousell_image_3.png";
import xrayImage from "../assets/CF_Chest Xray.png";
import treadmillImage from "../assets/CF_Treadmill.png";
import checkUpImage from "../assets/CheckUp.png";

const HomeSubMenu = () => (
  <Container className="home-custom-container-image">
    <div className="div-why-us background-gradient">
      <div className="row">
        <div className="col-md-6 p-4">
          <h1 className="align-left text-color-red">Why Us?</h1>
          <p className="align-left text-color-blue">
            <br />
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

      <div className="row">
        <div className="col-md-6 p-4">
          <h1 className="align-left text-color-red">How We Can Help?</h1>
          <img
            src={checkUpImage}
            alt="icon"
            className="image-fluid mx-auto d-block"
          />
        </div>
        <div className="col-md-6 p-4">
          <p className="align-left text-color-blue">
            <br />
            <b>We recognize that each patient, company or organization has their
            own different medical requirements. Our team are committed to learn,
            understand and fulfil these needs.</b>
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
      <div className="col align-left">
        <br />
        <ul className="text-color-grey">
          <li>Fitness to work</li>
          <li>Return to Work assessment</li>
          <li>Dealing with employee queries on health</li>
        </ul>
        <br />
      </div>
      <div className="col align-left">
        <br />
        <ul className="text-color-grey">
          <li>Fitness to work</li>
          <li>Return to Work assessment</li>
          <li>Dealing with employee queries on health</li>
        </ul>
        <br />
      </div>
      <div className="col align-left">
        <br />
        <ul className="text-color-grey">
          <li>Fitness to work</li>
          <li>Return to Work assessment</li>
          <li>Dealing with employee queries on health</li>
        </ul>
        <br />
      </div>
    </div>
    <div className="row div-latest-news">
      <div className="col-lg-12">
        <br />
        <h1 className="align-center text-color-red">Latest News</h1>
        <br />
        <div className="carousel-wrapper">
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
                      <b>Lorem Ipsum Dolor Sit Amet Consectetur</b>
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
                      <b>Lorem Ipsum Dolor Sit Amet Consectetur</b>
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
                      <b>Lorem Ipsum Dolor Sit Amet Consectetur</b>
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
                    src={carouselImage1}
                    alt="Company logo"
                    className="d-block w-100"
                  />
                  <div className="text-padding text-color-blue">
                    <p className="align-left">
                      <b>Lorem Ipsum Dolor Sit Amet Consectetur</b>
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
                      <b>Lorem Ipsum Dolor Sit Amet Consectetur</b>
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
                      <b>Lorem Ipsum Dolor Sit Amet Consectetur</b>
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
        </div>
      </div>
    </div>
  </Container>
);

export default HomeSubMenu;
