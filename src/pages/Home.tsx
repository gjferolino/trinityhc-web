import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import sgBizCtrImage from "../assets/sg_biz_ctr.png";
import HomeSubMenu from "./HomeSubMenu";

import drugIcon from "../assets/Icon_Drugs & Alcohol Screening.png";
import fitnessIcon from "../assets/Icon_Fitness To Work.png";
import healthScreeningIcon from "../assets/Icon_Health Screening.png";
import hearingNoiseIcon from "../assets/Icon_Hearing & Noise Monitoring.png";
import maritimeSeafaringIcon from "../assets/Icon_Maritime & Seafaring.png";
import occupationalHealthIcon from "../assets/Icon_Occupational Health.png";
import offshoreDivingIcon from "../assets/Icon_Offshore & Diving.png";

const Home = () => (
  <div>
    <Container className="home-custom-container-image text-center">
      <img
        src={sgBizCtrImage}
        alt="Singapore Business Central"
        className="sgBizCtrImage"
      />
      <div className="content-container">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1 className="title bold-text">Welcome to Trinity Medical Group</h1>
        <div className="spacer"></div>
        <p className="description">
          Our clinics are strategically located around Singapore and we have
          been providing medical services to the community and our corporate
          clients for more than 40 years. Our strengths are in Corporate Health
          Services, Occupational Health Services, Offshore and Maritime Health
          Services (e.g. Fitness for OGUK, BOSIET, Seafarer medical examination,
          UK's MCA ENG 1 Equivalent) and Drug & Alcohol Screening.
        </p>
        <div className="spacer"></div>
        <p className="description">
          Our expanding Industrial Hygiene Services (e.g. audiometry) have also
          become an integral component of our goal to provide a one-stop service
          centre to our corporate clients on all issues relating to health and
          safety in the workplace.
        </p>
        <div className="spacer"></div>
      </div>
      {/* <img src={servicesIcon} alt="Services" className="servicesIcon" /> */}
      <div className="row justify-content-center no-gutters">
        <div className="col-md-2 col-sm-4 col-4 p-3">
          <Link to="/services/chemical-exposure">
            <img
              src={occupationalHealthIcon}
              alt="Occupational Health<"
              className="small-image mx-auto d-block"
            />
          </Link>
          <div className="spacer"></div>
          <h5 className="about-txt-2">Occupational Health</h5>
          <div className="spacer"></div>
        </div>
        <div className="col-md-2 col-sm-4 col-4 p-3">
          <Link to="/services/maritime-seafaring">
            <img
              src={maritimeSeafaringIcon}
              alt="Maritime & Seafaring"
              className="small-image mx-auto d-block"
            />
          </Link>
          <div className="spacer"></div>
          <h5 className="about-txt-2">Maritime & Seafaring</h5>
          <div className="spacer"></div>
        </div>
        <div className="col-md-2 col-sm-4 col-4 p-3">
          <Link to="/services/drug-alcohol-screening">
            <img
              src={drugIcon}
              alt="icon"
              className="small-image mx-auto d-block"
            />
          </Link>
          <div className="spacer"></div>
          <h5 className="about-txt-2">Drug & Alcohol Screening</h5>
          <div className="spacer"></div>
        </div>
        <div className="col-md-2 col-sm-6 col-6 p-3">
          <Link to="/path-to-navigate-on-click">
            <img
              src={offshoreDivingIcon}
              alt="Offshore & Diving"
              className="small-image mx-auto d-block"
            />
          </Link>
          <div className="spacer"></div>
          <h5 className="about-txt-2">Offshore & Diving</h5>
          <div className="spacer"></div>
        </div>
        <div className="col-md-2 col-sm-6 col-6 d-md-none p-3">
          <Link to="/services/fitness-to-work">
            <img
              src={fitnessIcon}
              alt="Fitness To Work"
              className="small-image mx-auto d-block"
            />
          </Link>
          <div className="spacer"></div>
          <h5 className="about-txt-2">Fitness To Work</h5>
          <div className="spacer"></div>
        </div>
      </div>
      <div className="row justify-content-center no-gutters">
        <div className="col-md-2 col-sm-6 col-6 d-none d-md-block p-3">
          <Link to="/services/fitness-to-work">
            <img
              src={fitnessIcon}
              alt="icon"
              className="small-image mx-auto d-block"
            />
          </Link>
          <div className="spacer"></div>
          <h5 className="about-txt-2">Fitness To Work</h5>
          <div className="spacer"></div>
        </div>
        <div className="col-md-2 col-sm-6 col-6 p-3">
          <Link to="/services/hearing-noise">
            <img
              src={hearingNoiseIcon}
              alt="icon"
              className="small-image mx-auto d-block"
            />
          </Link>
          <div className="spacer"></div>
          <h5 className="about-txt-2">Hearing & Noise Monitoring</h5>
          <div className="spacer"></div>
        </div>
        <div className="col-md-2 col-sm-6 col-6 p-3">
          <Link to="/path-to-navigate-on-click">
            <img
              src={healthScreeningIcon}
              alt="icon"
              className="small-image mx-auto d-block"
            />
          </Link>
          <div className="spacer"></div>
          <h5 className="about-txt-2">Health Screening</h5>
          <div className="spacer"></div>
        </div>
      </div>
      <div className="spacer"></div>
    </Container>
    <HomeSubMenu />
  </div>
);

export default Home;
