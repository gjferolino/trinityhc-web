import { Container, Carousel, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import carouselImage1 from "../assets/carousell_image_1.png";
import carouselImage2 from "../assets/carousell_image_2.png";
import carouselImage3 from "../assets/carousell_image_3.png";

const HomeSubMenu = () => (
  <Container className="home-custom-container-image">
    <div className="div-why-us background-gradient">
      <div className="row">
        <div className="col">
          <br />
          <h1 className="align-left text-color-red">Why Us?</h1>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col align-left text-color-blue">
          <p>
            <b>Full Facilities Centres</b>
            <br />
            Our one-stop medical centres are fully equipped with:
            <br /> <br />
            <ul className="text-color-grey">
              <li>X-rays</li>
              <li>Spirometry</li>
              <li>Audiometry</li>
              <li>ECG, ECG Treadmill</li>
              <li>Drug and Alcohol Screen</li>
            </ul>
            This allows us the capability to conduct a full range of tests in a
            single location thereby saving time and man hours for your
            corporate.
          </p>
        </div>
        <div className="col align-left text-color-blue">
          <p>
            <b>Ease of Access</b>
            <br /> <br />
            <b>Location:</b> <br />
            Our full facilities medical centres are conveniently located at
            Jurong East Central (near Jurong East MRT) and Robinson Road (near
            Tanjong Pagar MRT).
            <br /> <br />
            <b>Direct Access to coordinators:</b> <br />
            Each client is assigned a coordinator to facilitate communications
            with the medical centre.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <br />
          <h1 className="align-left text-color-red">How We Can Help?</h1>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col align-left text-color-blue">
          <p>
            <b>Medical Support for the HR Department</b>
            <br /> <br />
            <ul className="text-color-grey">
              <li>Fitness to work</li>
              <li>Return to Work assessment</li>
              <li>Dealing with employee queries on health</li>
              <li>Managing health cases effectively</li>
              <li>Prolonged illness assessment</li>
              <li>Follow Up of cases</li>
              <li>
                Reviewing medical reports to provide recommendations with
                regards to employees' work circumstances.
              </li>
            </ul>
            <b>Direct Focus on your Needs</b> <br />
            We recognize that each patient, company or organization has their
            own different medical requirements. Our team are committed to learn,
            understand and fulfil these needs.
            <br /> <br />
            Some common issues that we help our clients in are:
            <br /> <br />
            <ul className="text-color-grey">
              <li>Compliance with local or international guidelines.</li>
              <li>Employees' work fitness.</li>
            </ul>
          </p>
        </div>
        <div className="col align-left text-color-blue">
          <p>
            <b>Medical Support for all Corporate Occupational Health Issues</b>
            <br /> <br />
            <ul className="text-color-grey">
              <li>
                Assessment and advice on fitness of your employee at work.
              </li>
              <li>
                Support the medical surveillance and tracking of employee
                fitness at work.
              </li>
              <li>
                Advice on compliance to statutory and non-statutory guidelines
                on hazard exposures.
              </li>
              <li>
                Support on compliance to local or international guidelines (e.g.
                OSHA and NIOSH).
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
