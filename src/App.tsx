// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import ClinicalFacilities from "./pages/Clinical-Facilites";
import GeneralPractitioner from "./pages/Service-Pages/General-Practitioner";
import FitnessToWork from "./pages/Service-Pages/Corporate/Fitness-to-Work";
import ChemicalExposure from "./pages/Service-Pages/Occupational-Health/Chemical-Exposure";
import OffshoreDiving from "./pages/Service-Pages/Offshore-Diving";
import MaritimeSeafaring from "./pages/Service-Pages/Maritime-Seafaring";
import DrugAlcoholScreen from "./pages/Service-Pages/Drug-Alcohol-Screening";
import CorporateVaccination from "./pages/Service-Pages/Corporate/Corporate-Vaccination";
import EmergencyResponse from "./pages/Service-Pages/Corporate/Emergency-Response";
import Preemployment from "./pages/Service-Pages/Corporate/Pre-employment";
import HearingNoise from "./pages/Service-Pages/Occupational-Health/Hearing-Noise";
import HealthScreen from "./pages/Service-Pages/Health-Screening";
import TravelHealth from "./pages/Service-Pages/Travel-Health";
import Vaccinations from "./pages/Service-Pages/Vaccinations";
import LatestNews from "./pages/LatestNews";
import GovernmentScheme from "./pages/GovernmentScheme";
import Others from "./pages/Others";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import logo from "./assets/logo.png";
import mailIcon from "./assets/mail_icon.png";
import phoneIcon from "./assets/phone_icon.png";
import phoneIconV2 from "./assets/phone_icon_2.png";
import "./styles.css"; // Import the styles.css file
import OurTeam from "./pages/OurTeam";

const App = () => {
  const [show, setShow] = useState(false);
  const [activeKey, setActiveKey] = useState("/");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavSelect = (selectedKey: string) => {
    setActiveKey(selectedKey);
  };

  return (
    <Router basename="trinityhc-web">
      <Navbar className="navbar-custom" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              className="d-inline-block align-top logo"
              alt="Company logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={handleShow}
            className="d-lg-none"
          />

          <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
            <Navbar.Text className="me-4">
              <img src={mailIcon} alt="Email" className="icon" />
              <span className="icon-text">corporate@trinitymedical.com.sg</span>
            </Navbar.Text>
            <Navbar.Text>
              <img src={phoneIcon} alt="Mobile Number" className="icon" />
              <span className="icon-text">6560 7088</span>
            </Navbar.Text>
          </Navbar.Collapse>

          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            id="offcanvasNavbar"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>MENU</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
                <Nav.Link
                  as={Link}
                  to="/"
                  className={`nav-link ${activeKey === "/" ? "active" : ""}`}
                  onClick={() => handleNavSelect("/")}
                >
                  HOME
                </Nav.Link>
                <NavDropdown
                  className="nav-link no-padding"
                  title="ABOUT"
                  id="collasible-nav-dropdown-about"
                  active={activeKey === "/about"}
                  onClick={() => handleNavSelect("/about")}
                >
                  <NavDropdown.Item as={Link} to="/about/overview">
                    Overview
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/about/our-team">
                    Our Team
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/about/clinical-facilities">
                    Clinical Facilities
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="nav-link no-padding"
                  title="SERVICES"
                  id="collasible-nav-dropdown"
                  active={activeKey === "/services"}
                  onClick={() => handleNavSelect("/services")}
                >
                  <NavDropdown.Item as={Link} to="/services/gp-services">
                    GENERAL PRACTITIONER SERVICES
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/pre-re-employment">
                    CORPORATE SERVICES
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/pre-re-employment">
                    <ul className="no-margin-bottom">
                      <li>Pre-employment/Re-employment Medical Examination</li>
                    </ul>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/fitness-to-work">
                    <ul className="no-margin-bottom">
                      <li>Fitness To Work Assessment</li>
                    </ul>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/emergency-response-support"
                  >
                    <ul className="no-margin-bottom">
                      <li>Emergency Response Support</li>
                    </ul>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/vaccinations"
                  >
                    <ul className="no-margin-bottom">
                      <li>Vaccinations</li>
                    </ul>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/chemical-exposure">
                    OCCUPATIONAL HEALTH
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/chemical-exposure">
                    <ul className="no-margin-bottom">
                      <li>Chemical Exposure Surveillance</li>
                    </ul>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/hearing-noise">
                    <ul className="no-margin-bottom">
                      <li>Hearing & Noise Monitoring</li>
                    </ul>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/offshore-diving">
                    OFFSHORE & DIVING
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/maritime-seafaring">
                    MARITIME & SEAFARING
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/drug-alcohol-screening"
                  >
                    DRUG & ALCOHOL SCREENING
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/health-screening">
                    HEALTH SCREENING
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/travel-health">
                    TRAVEL HEALTH
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/vaccinations">
                    VACCINATIONS
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  as={Link}
                  to="/latest-news"
                  className={`nav-link ${
                    activeKey === "/latest-news" ? "active" : ""
                  }`}
                  onClick={() => handleNavSelect("/latest-news")}
                >
                  LATEST NEWS
                </Nav.Link>
                <NavDropdown
                  className="nav-link no-padding"
                  title="ACCREDITATION"
                  id="collasible-nav-dropdown-about"
                  active={activeKey === "/accreditation"}
                  onClick={() => handleNavSelect("/accreditation")}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/accreditation/government-scheme"
                  >
                    Government Schemes
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/accreditation/others">
                    Others
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  className={`nav-link ${
                    activeKey === "/contact" ? "active" : ""
                  }`}
                  onClick={() => handleNavSelect("/contact")}
                >
                  CONTACT
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>

      <Nav className="justify-content-center d-none d-lg-flex" id="nav-custom">
        <Nav.Link
          as={Link}
          to="/"
          className="nav-link"
          active={activeKey === "/"}
          onClick={() => handleNavSelect("/")}
        >
          HOME
        </Nav.Link>

        <NavDropdown
          className="nav-link no-padding"
          title="ABOUT"
          id="collasible-nav-dropdown-about"
          active={activeKey === "/about"}
          onClick={() => handleNavSelect("/about")}
        >
          <NavDropdown.Item as={Link} to="/about/overview">
            Overview
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/about/our-team">
            Our Team
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/about/clinical-facilities">
            Clinical Facilities
          </NavDropdown.Item>
        </NavDropdown>
        {/* <Nav.Link
          as={Link}
          to="/services"
          className="nav-link"
          active={activeKey === '/services'}
          onClick={() => handleNavSelect('/services')}
        >
          SERVICES
        </Nav.Link> */}
        <NavDropdown
          className="nav-link no-padding"
          title="SERVICES"
          id="collasible-nav-dropdown"
          active={activeKey === "/services"}
          onClick={() => handleNavSelect("/services")}
        >
          <NavDropdown.Item as={Link} to="/services/gp-services">
            GENERAL PRACTITIONER SERVICES
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/pre-re-employment">
            CORPORATE SERVICES
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/pre-re-employment">
            <ul className="no-margin-bottom">
              <li>Pre-employment/Re-employment Medical Examination</li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/fitness-to-work">
            <ul className="no-margin-bottom">
              <li>Fitness To Work Assessment</li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/emergency-response-support">
            <ul className="no-margin-bottom">
              <li>Emergency Response Support</li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/vaccinations">
            <ul className="no-margin-bottom">
              <li>Vaccinations</li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/chemical-exposure">
            OCCUPATIONAL HEALTH
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/chemical-exposure">
            <ul className="no-margin-bottom">
              <li>Chemical Exposure Surveillance</li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/hearing-noise">
            <ul className="no-margin-bottom">
              <li>Hearing & Noise Monitoring</li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/offshore-diving">
            OFFSHORE & DIVING
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/maritime-seafaring">
            MARITIME & SEAFARING
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/drug-alcohol-screening">
            DRUG & ALCOHOL SCREENING
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/health-screening">
            HEALTH SCREENING
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/travel-health">
            TRAVEL HEALTH
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/services/vaccinations">
            VACCINATIONS
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link
          as={Link}
          to="/latest-news"
          className="nav-link"
          active={activeKey === "/latest-news"}
          onClick={() => handleNavSelect("/latest-news")}
        >
          LATEST NEWS
        </Nav.Link>
        <NavDropdown
          className="nav-link no-padding"
          title="ACCREDITATION"
          id="collasible-nav-dropdown-about"
          active={activeKey === "/accreditation"}
          onClick={() => handleNavSelect("/accreditation")}
        >
          <NavDropdown.Item as={Link} to="/accreditation/government-scheme">
            Government Schemes
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/accreditation/others">
            Others
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link
          as={Link}
          to="/contact"
          className="nav-link"
          active={activeKey === "/contact"}
          onClick={() => handleNavSelect("/contact")}
        >
          CONTACT
        </Nav.Link>
      </Nav>

      <Container className="d-lg-none custom-container">
        <img src={phoneIconV2} alt="Mobile Number" className="icon-text-v2" />
        <span className="icon-text-v2">6560 7088</span>
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/overview" element={<About />} />
        <Route path="/about/our-team" element={<OurTeam />} />
        <Route
          path="/about/clinical-facilities"
          element={<ClinicalFacilities />}
        />
        <Route
          path="/accreditation/government-scheme"
          element={<GovernmentScheme />}
        />
        <Route path="/accreditation/others" element={<Others />} />
        <Route path="/services/gp-services" element={<GeneralPractitioner />} />
        <Route path="/services/fitness-to-work" element={<FitnessToWork />} />
        <Route
          path="/services/chemical-exposure"
          element={<ChemicalExposure />}
        />
        <Route path="/services/hearing-noise" element={<HearingNoise />} />
        <Route path="/services/offshore-diving" element={<OffshoreDiving />} />
        <Route
          path="/services/maritime-seafaring"
          element={<MaritimeSeafaring />}
        />
        <Route
          path="/services/drug-alcohol-screening"
          element={<DrugAlcoholScreen />}
        />
        <Route path="/services/vaccinations" element={<Vaccinations />} />
        <Route path="/services/travel-health" element={<TravelHealth />} />
        <Route path="/services/pre-re-employment" element={<Preemployment />} />
        <Route
          path="/services/emergency-response-support"
          element={<EmergencyResponse />}
        />
        <Route
          path="/services/vaccinations"
          element={<CorporateVaccination />}
        />
        <Route path="/services/health-screening" element={<HealthScreen />} />
        <Route path="/latest-news" element={<LatestNews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
