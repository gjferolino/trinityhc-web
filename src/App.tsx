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
import Services from "./pages/Services";
import GeneralPractitioner from "./pages/Service-Pages/General-Practitioner";
import FitnessToWork from "./pages/Service-Pages/Corporate/Fitness-to-Work";
import ChemicalExposure from "./pages/Service-Pages/Occupational-Health/Chemical-Exposure";
import OffshoreDiving from "./pages/Service-Pages/Offshore-Diving";
import LatestNews from "./pages/LatestNews";
import Accreditation from "./pages/Accreditation";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import logo from "./assets/logo.png";
import mailIcon from "./assets/mail_icon.png";
import phoneIcon from "./assets/phone_icon.png";
import phoneIconV2 from "./assets/phone_icon_2.png";
import "./styles.css"; // Import the styles.css file

const App = () => {
  const [show, setShow] = useState(false);
  const [activeKey, setActiveKey] = useState("/");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavSelect = (selectedKey: string) => {
    setActiveKey(selectedKey);
  };

  return (
    <Router>
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
                <Nav.Link
                  as={Link}
                  to="/about"
                  className={`nav-link ${
                    activeKey === "/about" ? "active" : ""
                  }`}
                  onClick={() => handleNavSelect("/about")}
                >
                  ABOUT
                </Nav.Link>
                <NavDropdown
                  className="nav-link no-padding"
                  title="SERVICES"
                  id="collasible-nav-dropdown"
                  active={activeKey === "/services"}
                  onClick={() => handleNavSelect("/services")}
                >
                  <NavDropdown.Item href="/services/gp-services">
                    GENERAL PRACTITIONER SERVICES
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    CORPORATE SERVICES
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2.1">
                    <ul className="no-margin-bottom">
                      <li>Pre-employment/Re-employment <br/>Medical Examination</li>
                    </ul>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/services/fitness-to-work">
                    <ul className="no-margin-bottom">
                      <li>Fitness To Work Assessment</li>
                    </ul>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2.3">
                    <ul className="no-margin-bottom">
                      <li>Emergency Response Support</li>
                    </ul>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2.4">
                    <ul className="no-margin-bottom">
                      <li>Vaccinations</li>
                    </ul>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    OCCUPATIONAL HEALTH
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/services/chemical-exposure">
                    <ul className="no-margin-bottom">
                      <li>Chemical Exposure Surveillance</li>
                    </ul>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3.2">
                    <ul className="no-margin-bottom">
                      <li>Hearing & Noise Monitoring</li>
                    </ul>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/services/offshore-diving">
                    OFFSHORE & DIVING
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    MARITIME & SEAFARING
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    DRUG & ALCOHOL SCREENING
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.7">
                    HEALTH SCREENING
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.8">
                    TRAVEL HEALTH
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.9">
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
                <Nav.Link
                  as={Link}
                  to="/accreditation"
                  className={`nav-link ${
                    activeKey === "/accreditation" ? "active" : ""
                  }`}
                  onClick={() => handleNavSelect("/accreditation")}
                >
                  ACCREDITATION
                </Nav.Link>
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
        <Nav.Link
          as={Link}
          to="/about"
          className="nav-link"
          active={activeKey === "/about"}
          onClick={() => handleNavSelect("/about")}
        >
          ABOUT
        </Nav.Link>
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
          <NavDropdown.Item href="/services/gp-services">
            GENERAL PRACTITIONER SERVICES
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            CORPORATE SERVICES
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2.1">
            <ul className="no-margin-bottom">
              <li>Pre-employment/Re-employment Medical Examination</li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Item href="/services/fitness-to-work">
            <ul className="no-margin-bottom">
              <li>Fitness To Work Assessment</li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2.3">
            <ul className="no-margin-bottom">
              <li>Emergency Response Support</li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2.4">
            <ul className="no-margin-bottom">
              <li>Vaccinations</li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">
            OCCUPATIONAL HEALTH
          </NavDropdown.Item>
          <NavDropdown.Item href="/services/chemical-exposure">
            <ul className="no-margin-bottom">
              <li>Chemical Exposure Surveillance</li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3.2">
            <ul className="no-margin-bottom">
              <li>Hearing & Noise Monitoring</li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Item href="/services/offshore-diving">
            OFFSHORE & DIVING
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">
            MARITIME & SEAFARING
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">
            DRUG & ALCOHOL SCREENING
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.7">
            HEALTH SCREENING
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.8">TRAVEL HEALTH</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.9">VACCINATIONS</NavDropdown.Item>
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
        <Nav.Link
          as={Link}
          to="/accreditation"
          className="nav-link"
          active={activeKey === "/accreditation"}
          onClick={() => handleNavSelect("/accreditation")}
        >
          ACCREDITATION
        </Nav.Link>
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
        <Route path="/about" element={<About />} />
        <Route path="/services/gp-services" element={<GeneralPractitioner />} />
        <Route path="/services/fitness-to-work" element={<FitnessToWork />} />
        <Route path="/services/chemical-exposure" element={<ChemicalExposure />} />
        <Route path="/services/offshore-diving" element={<OffshoreDiving />} />
        <Route path="/latest-news" element={<LatestNews />} />
        <Route path="/accreditation" element={<Accreditation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
